import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2_7pdb5f.css';
import '../../css/g/g3u5m_beg.css';
import '../../css/h/hxunfkbdr.css';
import '../../css/o/oaab4acdt.css';
import '../../css/i/i4w3lbvbu.css';
import '../../css/z/zrrb-ly_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y2_7pdb5f"/><path class="g3u5m_beg"/><path class="hxunfkbdr"/><path class="oaab4acdt"/><path class="i4w3lbvbu"/><path class="zrrb-ly_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-swap"} {...others} />);
}

export default Component;
