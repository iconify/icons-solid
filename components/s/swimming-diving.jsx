import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvfegfb4r.css';
import '../../css/m/mrl1q60gp.css';
import '../../css/f/fly294b3o.css';
import '../../css/b/bn4_g0b_p.css';
import '../../css/b/bhw9axmcu.css';
import '../../css/a/a9_4cob8o.css';
import '../../css/h/hvyzgibgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvfegfb4r"/><path class="mrl1q60gp"/><path class="fly294b3o"/><path class="bn4_g0b_p"/><path class="bhw9axmcu"/><path class="a9_4cob8o"/><path class="hvyzgibgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:swimming-diving"} {...others} />);
}

export default Component;
