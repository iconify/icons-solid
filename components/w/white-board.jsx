import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouoq8vsjl.css';
import '../../css/x/xd1kvz6_i.css';
import '../../css/h/hl38zzbtw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ouoq8vsjl"/><path class="xd1kvz6_i"/><path class="hl38zzbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:white-board"} {...others} />);
}

export default Component;
