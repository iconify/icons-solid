import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq38d_g_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kq38d_g_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:whistle-outline"} {...others} />);
}

export default Component;
