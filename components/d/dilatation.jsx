import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_cu6h09n.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="g_cu6h09n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:dilatation"} {...others} />);
}

export default Component;
