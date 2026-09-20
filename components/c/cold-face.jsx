import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cawt47bxq.css';
import '../../css/c/cnd4unezd.css';
import '../../css/i/i8smgiboo.css';
import '../../css/f/friuh0b8r.css';
import '../../css/c/czgob2bpy.css';
import '../../css/w/w1circbik.css';
import '../../css/o/ojo6lub6p.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cawt47bxq"/><path class="cnd4unezd"/><path class="i8smgiboo"/><path class="friuh0b8r"/><path class="czgob2bpy"/><path class="w1circbik"/><path class="ojo6lub6p"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cold-face"} {...others} />);
}

export default Component;
