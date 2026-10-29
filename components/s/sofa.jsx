import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eckwp4bke.css';
import '../../css/x/x7hx8gbwn.css';
import '../../css/u/uenul3b4l.css';
import '../../css/r/rkxkof6wc.css';
import '../../css/u/ul_n7p_uj.css';
import '../../css/i/iy9f8tbsh.css';
import '../../css/l/l0uti8bix.css';
import '../../css/q/qa6ujkfas.css';
import '../../css/f/f3da5z65w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eckwp4bke wm-shadow"/><path class="wm-shadow x7hx8gbwn"/><path class="uenul3b4l"/><path class="rkxkof6wc"/><path class="ul_n7p_uj"/><path class="iy9f8tbsh"/><path class="l0uti8bix"/><path class="qa6ujkfas"/><path class="f3da5z65w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sofa"} {...others} />);
}

export default Component;
