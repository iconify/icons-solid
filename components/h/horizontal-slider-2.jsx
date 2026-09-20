import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/ou2z53b9b.css';
import '../../css/b/br23m8blf.css';
import '../../css/w/w2aof9v-l.css';
import '../../css/m/mtttm48ty.css';
import '../../css/n/n4jnsybnk.css';
import '../../css/j/jh5d1_pqs.css';
import '../../css/e/ed4-zrb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ou2z53b9b"/><path class="br23m8blf"/><path class="w2aof9v-l"/><path class="mtttm48ty"/><path class="n4jnsybnk"/><path class="jh5d1_pqs"/><path class="ed4-zrb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:horizontal-slider-2"} {...others} />);
}

export default Component;
