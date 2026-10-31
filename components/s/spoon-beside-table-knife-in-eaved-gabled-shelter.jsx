import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm1d_swqj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fm1d_swqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spoon-beside-table-knife-in-eaved-gabled-shelter"} {...others} />);
}

export default Component;
