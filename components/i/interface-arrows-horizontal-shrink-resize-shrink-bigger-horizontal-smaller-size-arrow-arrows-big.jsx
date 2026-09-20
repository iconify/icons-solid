import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6k_3kb4e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u6k_3kb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-horizontal-shrink-resize-shrink-bigger-horizontal-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
