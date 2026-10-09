import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyb-4v94m.css';
import '../../css/o/olexncc0c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xyb-4v94m"/><path class="olexncc0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-grid-20"} {...others} />);
}

export default Component;
