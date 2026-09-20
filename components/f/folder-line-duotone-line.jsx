import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/unud4sbtz.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v-ulqs9ho.css';
import '../../css/h/hz5z9dbox.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVG8EkTve8u" class="n1mjunbsu"><path class="unud4sbtz"/></mask><g class="h01tyzbfu"><path mask="url(#SVG8EkTve8u)" class="v-ulqs9ho"/><path class="hz5z9dbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-line-duotone-line"} {...others} />);
}

export default Component;
