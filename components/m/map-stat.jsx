import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n502x1bvx.css';
import '../../css/q/qcwre9owc.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="n502x1bvx"/><path class="qcwre9owc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-stat"} {...others} />);
}

export default Component;
