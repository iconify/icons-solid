import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_vpwmboc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="j_vpwmboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-shrink-2-expand-retract-shrink-bigger-big-small-smaller"} {...others} />);
}

export default Component;
