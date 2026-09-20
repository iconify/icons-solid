import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v30afmbdi.css';
import '../../css/i/i2xbnvbcj.css';
import '../../css/g/g-44jfbjw.css';
import '../../css/r/r-pwdt-3l.css';
import '../../css/f/fs7py2b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v30afmbdi"/><path class="i2xbnvbcj"/><path class="g-44jfbjw"/><path class="r-pwdt-3l"/><path class="fs7py2b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:optimization-graph-line"} {...others} />);
}

export default Component;
