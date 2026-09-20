import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0c16rc2r.css';
import '../../css/s/se4563bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0c16rc2r"/><path class="se4563bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:light-mode-hdr-bold"} {...others} />);
}

export default Component;
