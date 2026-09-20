import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8oafebxf.css';
import '../../css/r/r0ow-hbjk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x8oafebxf"/><path class="r0ow-hbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:folder-add"} {...others} />);
}

export default Component;
