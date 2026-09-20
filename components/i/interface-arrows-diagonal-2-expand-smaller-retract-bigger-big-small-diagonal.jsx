import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifutwnbcr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ifutwnbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-diagonal-2-expand-smaller-retract-bigger-big-small-diagonal"} {...others} />);
}

export default Component;
