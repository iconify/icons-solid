import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h6hrqachx.css';
import '../../css/n/n1aa0zb2h.css';
import '../../css/o/oy6_5-8pf.css';
import '../../css/p/p1gc7mrvd.css';
import '../../css/w/wx3hk7bpo.css';
import '../../css/t/ty-2p4dqy.css';
import '../../css/a/axzrrmbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h6hrqachx wm-shadow"/><path class="n1aa0zb2h"/><path class="oy6_5-8pf"/><path class="p1gc7mrvd"/><path class="wx3hk7bpo"/><path class="ty-2p4dqy wm-shine"/><path class="axzrrmbfz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:armchair"} {...others} />);
}

export default Component;
