import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/m/mo0t0x.css';
import '../../css/z/zxndow.css';
import '../../css/m/ml9e2l.css';
import '../../css/f/fyi9-p.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG1bXqpbwE"><path class="c5xdmn mo0t0x zxndow"/><path class="c5xdmn ml9e2l zxndow"/><path class="c5xdmn fyi9-p zxndow"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVG1bXqpbwE)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-off"} {...others} />);
}

export default Component;
