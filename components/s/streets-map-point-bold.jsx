import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7q7eibda.css';
import '../../css/v/vfmylgypt.css';
import '../../css/y/ynh320vat.css';
import '../../css/b/ba5x8cdcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c7q7eibda"/><path class="vfmylgypt"/><path clip-rule="evenodd" class="ynh320vat"/><path class="ba5x8cdcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-bold"} {...others} />);
}

export default Component;
