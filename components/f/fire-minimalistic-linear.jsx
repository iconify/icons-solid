import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e13-6lb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e13-6lb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-minimalistic-linear"} {...others} />);
}

export default Component;
