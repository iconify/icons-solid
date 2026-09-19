import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrbxo8bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrbxo8bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waves-ladder"} {...others} />);
}

export default Component;
