import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw5iff9jp.css';
import '../../css/g/gsktsac_k.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nw5iff9jp"/><path class="gsktsac_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:voronoi-map"} {...others} />);
}

export default Component;
