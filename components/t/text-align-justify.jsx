import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee4x8mcav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee4x8mcav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:text-align-justify"} {...others} />);
}

export default Component;
