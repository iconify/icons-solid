import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueaxwlb4u.css';
import '../../css/f/fosgzfbvu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ueaxwlb4u"/><path class="fosgzfbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pie-chart-alt-solid"} {...others} />);
}

export default Component;
