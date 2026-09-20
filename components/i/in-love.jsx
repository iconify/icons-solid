import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v-en9qcfk.css';
import '../../css/w/wz1po1d3x.css';
import '../../css/j/j93jaqb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="v-en9qcfk"/><path class="wz1po1d3x"/><path class="j93jaqb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:in-love"} {...others} />);
}

export default Component;
