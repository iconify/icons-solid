import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djvu6_z9o.css';
import '../../css/w/wxfft0bkm.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="djvu6_z9o"/><path class="wxfft0bkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:palau"} {...others} />);
}

export default Component;
