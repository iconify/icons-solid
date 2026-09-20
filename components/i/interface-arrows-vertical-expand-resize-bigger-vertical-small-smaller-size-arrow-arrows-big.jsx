import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdevb0p2m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wdevb0p2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-vertical-expand-resize-bigger-vertical-small-smaller-size-arrow-arrows-big"} {...others} />);
}

export default Component;
