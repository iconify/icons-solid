import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rie_5cbwa.css';
import '../../css/b/bxrswi4vq.css';
import '../../css/q/q-irv3b_w.css';
import '../../css/o/oc7mgouay.css';
import '../../css/w/wwgi1acvp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rie_5cbwa"/><path class="bxrswi4vq"/><path class="q-irv3b_w"/><path class="oc7mgouay"/><path class="wwgi1acvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-brain-2"} {...others} />);
}

export default Component;
