import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aslbu_b_w.css';
import '../../css/d/ds_cs8bbi.css';
import '../../css/s/sp5frqbty.css';
import '../../css/w/was2g0m_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aslbu_b_w wm-shadow"/><path class="ds_cs8bbi wm-shadow"/><path class="sp5frqbty"/><path class="was2g0m_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevron-left"} {...others} />);
}

export default Component;
