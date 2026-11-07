import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_vbaf13b.css';
import '../../css/h/hlvndtg7m.css';
import '../../css/s/slav_jzds.css';
import '../../css/m/m7wnxobqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_vbaf13b"/><path class="hlvndtg7m"/><path class="slav_jzds"/><path class="m7wnxobqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rainbow-bold"} {...others} />);
}

export default Component;
