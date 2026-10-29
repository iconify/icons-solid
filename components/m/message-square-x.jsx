import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wlhhizb-a.css';
import '../../css/j/jbb3wybwz.css';
import '../../css/d/d34o61bpd.css';
import '../../css/n/n3k0ufknr.css';
import '../../css/i/i_jo63g9s.css';
import '../../css/h/hqkr-mb2f.css';
import '../../css/o/ocn8myoqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wlhhizb-a wm-shadow"/><path class="jbb3wybwz"/><path class="d34o61bpd"/><path class="n3k0ufknr"/><path class="i_jo63g9s wm-shine"/><path class="hqkr-mb2f wm-deco"/><path class="ocn8myoqn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-square-x"} {...others} />);
}

export default Component;
