import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucyj_sb_u.css';
import '../../css/l/l0cgkbf-f.css';
import '../../css/b/bx8fgc64p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ucyj_sb_u"/><path class="l0cgkbf-f"/><path class="bx8fgc64p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tiny-house-20"} {...others} />);
}

export default Component;
