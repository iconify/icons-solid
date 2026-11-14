import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qykna05dk.css';
import '../../css/a/a6tutdvgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="qykna05dk"/><path class="a6tutdvgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:token-square"} {...others} />);
}

export default Component;
