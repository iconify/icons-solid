import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf6nudbzg.css';
import '../../css/f/frp2_fb2i.css';
import '../../css/e/e_5k39kyp.css';

const viewBox = {"width":74,"height":24};
const content = `<path class="xf6nudbzg"/><path class="frp2_fb2i"/><path class="e_5k39kyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:logo-github-24"} {...others} />);
}

export default Component;
