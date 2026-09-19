import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq2drpblx.css';
import '../../css/g/gi07l0tvf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cq2drpblx"/><path class="gi07l0tvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:triangle-map"} {...others} />);
}

export default Component;
