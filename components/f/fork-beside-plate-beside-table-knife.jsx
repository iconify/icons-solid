import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4k1elb6d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u4k1elb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fork-beside-plate-beside-table-knife"} {...others} />);
}

export default Component;
