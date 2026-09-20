import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haxvedcdm.css';
import '../../css/a/alb_3ybms.css';
import '../../css/e/eu7poe5sx.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="haxvedcdm"/><path class="alb_3ybms"/><path class="eu7poe5sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:ear-nose-throat"} {...others} />);
}

export default Component;
