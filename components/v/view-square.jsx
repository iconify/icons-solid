import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqyzmsbaa.css';
import '../../css/p/pgsllwz8c.css';
import '../../css/l/luzh-0z8l.css';
import '../../css/h/hptsgncsn.css';
import '../../css/h/h21oebcvs.css';
import '../../css/f/f6ouxgb7u.css';
import '../../css/e/elqwflmpl.css';
import '../../css/g/g_t-pyb0c.css';
import '../../css/c/cby6f2buq.css';
import '../../css/j/jo8rf320n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tqyzmsbaa"/><path class="pgsllwz8c"/><path class="luzh-0z8l"/><path class="hptsgncsn"/><path class="h21oebcvs"/><path class="f6ouxgb7u"/><path class="elqwflmpl"/><path class="g_t-pyb0c"/><path class="cby6f2buq"/><path class="jo8rf320n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:view-square"} {...others} />);
}

export default Component;
