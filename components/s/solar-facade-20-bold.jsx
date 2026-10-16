import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubj09gbel.css';
import '../../css/j/jutb9bbnv.css';
import '../../css/b/b9g-2_b0b.css';
import '../../css/h/hf27v6bld.css';
import '../../css/g/ghlpjzi4r.css';
import '../../css/x/xd5t-tbiy.css';
import '../../css/p/pwt-u_b8x.css';
import '../../css/g/gq84c71iz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubj09gbel"/><path class="jutb9bbnv"/><path class="b9g-2_b0b"/><path class="hf27v6bld"/><path class="ghlpjzi4r"/><path class="xd5t-tbiy"/><path class="pwt-u_b8x"/><path class="gq84c71iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-facade-20-bold"} {...others} />);
}

export default Component;
