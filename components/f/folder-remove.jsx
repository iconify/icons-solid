import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vupozobcn.css';
import '../../css/z/zhuxdlbfr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vupozobcn"/><path class="zhuxdlbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:folder-remove"} {...others} />);
}

export default Component;
