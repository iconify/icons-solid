import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zef30ob2n.css';
import '../../css/b/baih8hb8v.css';
import '../../css/e/es97pcacw.css';
import '../../css/u/ucogdbb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zef30ob2n"/><path class="baih8hb8v"/><path class="es97pcacw"/><path class="ucogdbb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-search-duotone"} {...others} />);
}

export default Component;
