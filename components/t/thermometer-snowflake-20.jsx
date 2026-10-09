import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6zve7bwi.css';
import '../../css/p/ppk8d-n1m.css';
import '../../css/d/dyrpvlfpb.css';
import '../../css/p/px1s3hbev.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6zve7bwi"/><path class="ppk8d-n1m"/><path class="dyrpvlfpb"/><path class="px1s3hbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-snowflake-20"} {...others} />);
}

export default Component;
