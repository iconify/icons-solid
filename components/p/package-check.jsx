import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t7nwaq44g.css';
import '../../css/r/r5obt3zxb.css';
import '../../css/t/t_5fg7b9c.css';
import '../../css/i/ioten_ypp.css';
import '../../css/g/g8-fd1i8q.css';
import '../../css/j/ju6xp5b1z.css';
import '../../css/b/b-xzkac_b.css';
import '../../css/k/knaxpm8rz.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="t7nwaq44g wm-shadow"/><path class="r5obt3zxb"/><path class="t_5fg7b9c"/><path class="ioten_ypp"/><path class="g8-fd1i8q wm-shine"/><path class="ju6xp5b1z wm-s"/><path class="b-xzkac_b wm-s"/><path class="knaxpm8rz wm-s"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:package-check"} {...others} />);
}

export default Component;
