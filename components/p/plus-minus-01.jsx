import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwa1c4o_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwa1c4o_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plus-minus-01"} {...others} />);
}

export default Component;
