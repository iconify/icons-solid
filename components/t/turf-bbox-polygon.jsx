import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqs9uef3x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yqs9uef3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-bbox-polygon"} {...others} />);
}

export default Component;
