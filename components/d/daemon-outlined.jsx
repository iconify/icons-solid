import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvb50glwu.css';
import '../../css/f/fj1-tkbqz.css';
import '../../css/h/hwoc3ibiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvb50glwu"/><path class="fj1-tkbqz"/><path class="hwoc3ibiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:daemon-outlined"} {...others} />);
}

export default Component;
