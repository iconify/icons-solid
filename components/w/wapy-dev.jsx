import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af9rt6b7c.css';
import '../../css/h/heyvp3bvx.css';
import '../../css/q/qioeu_bwj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="af9rt6b7c"/><path class="heyvp3bvx"/><path class="qioeu_bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wapy-dev"} {...others} />);
}

export default Component;
