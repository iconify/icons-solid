import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/li1v_zb8r.css';
import '../../css/z/z_2v4d0aa.css';
import '../../css/v/v0ddqabxq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="li1v_zb8r"/><path class="z_2v4d0aa"/><path class="v0ddqabxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-arrow-left"} {...others} />);
}

export default Component;
