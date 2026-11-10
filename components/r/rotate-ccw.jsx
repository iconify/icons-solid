import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odx1occis.css';
import '../../css/x/xflj7b96n.css';
import '../../css/i/ik7t6gbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="odx1occis"><path class="xflj7b96n"/><path class="ik7t6gbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:rotate-ccw"} {...others} />);
}

export default Component;
