import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmysx9wjv.css';
import '../../css/x/xyvkl48gi.css';
import '../../css/y/yyiktg_vs.css';
import '../../css/s/szdd8_byp.css';
import '../../css/q/q7p9phbpp.css';
import '../../css/x/x1s532lre.css';
import '../../css/b/b_bmltbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fmysx9wjv"/><path class="xyvkl48gi"/><path class="yyiktg_vs"/><path class="szdd8_byp"/><path class="q7p9phbpp"/><path class="x1s532lre"/><path class="b_bmltbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gymnastics-ribbon-person-2"} {...others} />);
}

export default Component;
