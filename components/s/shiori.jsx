import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y83-mxdaj.css';
import '../../css/m/mdqiz-ben.css';

const viewBox = {"width":117.173,"height":117.173};
const content = `<g transform="translate(-39.688 -207.42)"><circle class="y83-mxdaj"/><path class="mdqiz-ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:shiori"} {...others} />);
}

export default Component;
