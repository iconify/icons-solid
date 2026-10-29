import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbr10cbls.css';
import '../../css/p/p1s_b1bnt.css';
import '../../css/f/fumefdsvh.css';
import '../../css/w/wmpwg_b2d.css';
import '../../css/e/e7p7esbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbr10cbls wm-a"/><path class="p1s_b1bnt wm-a"/><path class="fumefdsvh wm-a"/><path class="wm-k wmpwg_b2d"/><path class="e7p7esbpd wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hotel"} {...others} />);
}

export default Component;
