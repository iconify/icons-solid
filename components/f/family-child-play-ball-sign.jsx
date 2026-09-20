import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_357ilrk.css';
import '../../css/d/duh5fmbqe.css';
import '../../css/z/zz8u2juyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m_357ilrk"/><path class="duh5fmbqe"/><path class="zz8u2juyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:family-child-play-ball-sign"} {...others} />);
}

export default Component;
