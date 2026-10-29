import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-7s1tbdr.css';
import '../../css/d/ds0uwvbso.css';
import '../../css/t/te1bgvv9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y-7s1tbdr"/><path class="ds0uwvbso wm-k"/><path class="te1bgvv9h wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chevron-right"} {...others} />);
}

export default Component;
