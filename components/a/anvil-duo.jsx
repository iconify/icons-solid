import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp50wybee.css';
import '../../css/k/k-141wb6l.css';
import '../../css/s/s4qo96blz.css';
import '../../css/i/i21fmlb7m.css';
import '../../css/j/j6i03sb9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mp50wybee"/><path class="k-141wb6l"/><path class="s4qo96blz"/><path class="i21fmlb7m"/><path class="j6i03sb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:anvil-duo"} {...others} />);
}

export default Component;
