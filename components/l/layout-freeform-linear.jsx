import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr98fbsm.css';
import '../../css/u/u-r142amt.css';
import '../../css/y/yyzjhcc7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecr98fbsm"/><path class="u-r142amt"/><path class="yyzjhcc7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-linear"} {...others} />);
}

export default Component;
