import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivcj8jbaz.css';
import '../../css/r/ru9og_0qt.css';
import '../../css/u/uli9wpb5n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ivcj8jbaz"/><path class="ru9og_0qt"/><path clip-rule="evenodd" class="uli9wpb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:add-layer-2-flat"} {...others} />);
}

export default Component;
