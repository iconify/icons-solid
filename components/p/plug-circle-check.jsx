import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_s5z_bat.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="u_s5z_bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:plug-circle-check"} {...others} />);
}

export default Component;
