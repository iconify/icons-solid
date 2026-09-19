import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evelimbep.css';
import '../../css/x/xyq_9lbst.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="evelimbep"/><path class="xyq_9lbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-smiley"} {...others} />);
}

export default Component;
