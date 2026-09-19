import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlo8iz2zo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlo8iz2zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:umbrella-alt-filled"} {...others} />);
}

export default Component;
