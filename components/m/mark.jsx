import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uxh_gy0ob.css';
import '../../css/e/es6tpgb9i.css';
import '../../css/u/ug_gxp6lu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="uxh_gy0ob"/><path class="es6tpgb9i"/><path class="ug_gxp6lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mark"} {...others} />);
}

export default Component;
