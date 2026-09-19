import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je4z95b1p.css';
import '../../css/d/dxj4yybcj.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="je4z95b1p"/><path class="dxj4yybcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:poi-info-o"} {...others} />);
}

export default Component;
