import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzfv-sbvh.css';
import '../../css/f/fe3fg-bkg.css';
import '../../css/v/vs3nxnb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fzfv-sbvh wm-shadow"/><path class="fe3fg-bkg wm-k"/><path class="vs3nxnb9l wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-right"} {...others} />);
}

export default Component;
