import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo5l9st-w.css';
import '../../css/a/avm801z_y.css';
import '../../css/j/jc240yboe.css';
import '../../css/j/jghbtab4j.css';
import '../../css/r/ref23rbxr.css';
import '../../css/g/ghgewssbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="vo5l9st-w"/><circle transform="matrix(-1 0 0 1 24 24)" class="avm801z_y"/><path class="jc240yboe"/><path class="jghbtab4j"/><path class="ref23rbxr"/><path class="ghgewssbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:auto-focus"} {...others} />);
}

export default Component;
