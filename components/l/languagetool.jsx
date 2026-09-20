import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpwqczfrc.css';
import '../../css/q/qas0_334r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bpwqczfrc"/><path class="qas0_334r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:languagetool"} {...others} />);
}

export default Component;
