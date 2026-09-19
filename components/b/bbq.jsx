import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ehp363b1u.css';
import '../../css/n/n69jpl95o.css';
import '../../css/p/pna1nobrc.css';
import '../../css/k/k6bb63bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ehp363b1u"/><path class="n69jpl95o"/><path class="pna1nobrc"/><path class="k6bb63bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bbq"} {...others} />);
}

export default Component;
