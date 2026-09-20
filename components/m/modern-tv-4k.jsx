import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b654m9zqq.css';
import '../../css/l/l3vo_262q.css';
import '../../css/b/bwop99b5d.css';
import '../../css/z/zktn81bse.css';
import '../../css/d/dqa2u5bgf.css';
import '../../css/c/c9et3kboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b654m9zqq"/><path class="l3vo_262q"/><path class="bwop99b5d"/><path class="zktn81bse"/><path class="dqa2u5bgf"/><path class="c9et3kboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:modern-tv-4k"} {...others} />);
}

export default Component;
