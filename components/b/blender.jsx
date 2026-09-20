import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl5h54bul.css';
import '../../css/n/ni1f-ib-g.css';
import '../../css/o/ogrgq48lj.css';

const viewBox = {"width":2472.8,"height":1996.5,"left":0.1,"top":16.7};
const content = `<path class="vl5h54bul"/><path class="ni1f-ib-g"/><path class="ogrgq48lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:blender"} {...others} />);
}

export default Component;
