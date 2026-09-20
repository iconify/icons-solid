import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdlg8tffb.css';
import '../../css/u/ulof31eud.css';
import '../../css/q/quyrsobnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vdlg8tffb"/><path class="ulof31eud"/><path class="quyrsobnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note-remove-filled"} {...others} />);
}

export default Component;
