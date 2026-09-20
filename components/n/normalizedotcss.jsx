import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrap8fsim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrap8fsim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:normalizedotcss"} {...others} />);
}

export default Component;
