import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_zivgbvo.css';
import '../../css/z/zvapgx8fo.css';
import '../../css/j/jl_1rxpar.css';
import '../../css/z/zwzldpb9i.css';
import '../../css/f/frsizbwhk.css';
import '../../css/w/w67qg-bjn.css';
import '../../css/x/xrnfj_74k.css';
import '../../css/y/yyh4qbbgq.css';
import '../../css/s/s3g0phbvz.css';
import '../../css/l/lwuqu64bf.css';
import '../../css/g/g7l56rbla.css';
import '../../css/x/x8vl_tb3b.css';
import '../../css/u/uuazhlicw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p_zivgbvo"/><path class="zvapgx8fo"/><path class="jl_1rxpar"/><path class="zwzldpb9i"/><path class="frsizbwhk"/><path class="w67qg-bjn"/><path class="xrnfj_74k"/><path class="yyh4qbbgq"/><path class="s3g0phbvz"/><path class="lwuqu64bf"/><path class="g7l56rbla"/><path class="x8vl_tb3b"/><path class="uuazhlicw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:archive-books"} {...others} />);
}

export default Component;
