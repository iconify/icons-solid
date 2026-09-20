import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adsr_cb6l.css';
import '../../css/i/i_ycnqb9b.css';
import '../../css/r/rcjsihboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="adsr_cb6l"/><path class="i_ycnqb9b"/><path class="rcjsihboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:natural-disaster-hurricane"} {...others} />);
}

export default Component;
