import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/b/bv1zhoonj.css';
import '../../css/p/p4_upccpe.css';
import '../../css/e/ewfjesctf.css';
import '../../css/p/phe7tob-q.css';
import '../../css/w/wpswi5bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zb2kedx8a"/><path class="bv1zhoonj"/><path class="p4_upccpe"/><path class="ewfjesctf"/><path class="phe7tob-q"/><path class="wpswi5bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:target-bold-duotone"} {...others} />);
}

export default Component;
