import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/oz97y6bsr.css';
import '../../css/d/dcgcy_8ex.css';
import '../../css/y/ym3miobeb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="oz97y6bsr"/><path class="dcgcy_8ex"/><path class="ym3miobeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:enter-key-one"} {...others} />);
}

export default Component;
