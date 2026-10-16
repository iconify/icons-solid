import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhyw7qxvp.css';
import '../../css/b/b0d-2nbym.css';
import '../../css/v/vaem5rbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hhyw7qxvp"/><path class="b0d-2nbym"/><path class="vaem5rbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:terminal-square-sparkle"} {...others} />);
}

export default Component;
