import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/v/vi2iu3bye.css';
import '../../css/p/p0ol1ibxv.css';
import '../../css/c/c2xscmr7x.css';
import '../../css/r/rdkcglbxs.css';
import '../../css/e/epokxgdxy.css';
import '../../css/n/n8229fbep.css';
import '../../css/c/c38hj8m4i.css';
import '../../css/y/ywv68_bhz.css';
import '../../css/g/gl13dqbgs.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="umm606kxf"><path class="vi2iu3bye"/><path class="p0ol1ibxv"/><path class="c2xscmr7x"/><path class="rdkcglbxs"/><path class="epokxgdxy"/><path class="n8229fbep"/><path class="c38hj8m4i"/><path class="ywv68_bhz"/><path class="gl13dqbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:filming-movie"} {...others} />);
}

export default Component;
