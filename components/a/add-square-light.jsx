import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-salgbqh.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/o/o5er010ia.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG5dOlTbEZ" class="f-salgbqh"/></defs><mask id="SVGTTraRNwq" class="n1mjunbsu"><use href="#SVG5dOlTbEZ"/></mask><g class="h01tyzbfu"><use href="#SVG5dOlTbEZ" mask="url(#SVGTTraRNwq)" class="l0bn-3b4l"/><path class="o5er010ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:add-square-light"} {...others} />);
}

export default Component;
