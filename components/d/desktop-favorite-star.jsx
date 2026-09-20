import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj2xv31vp.css';
import '../../css/t/tbb030bka.css';
import '../../css/y/ya2aiy5hu.css';
import '../../css/e/ej-08c4be.css';
import '../../css/s/szbc8ab8h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mj2xv31vp"/><path class="tbb030bka"/><path class="ya2aiy5hu"/><path class="ej-08c4be"/><path class="szbc8ab8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-favorite-star"} {...others} />);
}

export default Component;
