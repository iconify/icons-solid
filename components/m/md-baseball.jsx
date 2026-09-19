import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykl75acdx.css';
import '../../css/u/uvdwn1_nw.css';
import '../../css/b/bg9eedant.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ykl75acdx"/><path class="uvdwn1_nw"/><path class="bg9eedant"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-baseball"} {...others} />);
}

export default Component;
