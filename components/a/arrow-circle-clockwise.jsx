import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n55x42a9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n55x42a9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrow-circle-clockwise"} {...others} />);
}

export default Component;
