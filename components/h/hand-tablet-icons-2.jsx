import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p61l_ha_m.css';
import '../../css/v/vwpgn7b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="p61l_ha_m"/><path class="vwpgn7b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:hand-tablet-icons-2"} {...others} />);
}

export default Component;
