import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajnm6ob_j.css';
import '../../css/c/cscweibfi.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ajnm6ob_j"/><path class="cscweibfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-control"} {...others} />);
}

export default Component;
