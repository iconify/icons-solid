import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue03v71pc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ue03v71pc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-vertical-left-right-expand-resize-bigger-horizontal-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
