import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp839kwkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp839kwkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:carets-from-axis-horizontal"} {...others} />);
}

export default Component;
