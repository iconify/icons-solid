import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpt0rl_0q.css';
import '../../css/f/f5v9m_b1p.css';
import '../../css/v/vsgapqbdt.css';
import '../../css/u/uyohax_qu.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="f5v9m_b1p"/><path class="vsgapqbdt"/><path class="uyohax_qu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:graphic-stitching"} {...others} />);
}

export default Component;
