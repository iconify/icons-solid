import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai7y2sbdw.css';
import '../../css/u/u9b-vyu7r.css';
import '../../css/y/yanzugb6c.css';
import '../../css/j/j05p5bbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ai7y2sbdw"/><path class="u9b-vyu7r"/><path class="yanzugb6c"/><path class="j05p5bbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:seafood-squid"} {...others} />);
}

export default Component;
