import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-215m_gc.css';
import '../../css/c/c5jc2ztqj.css';
import '../../css/n/nzm6g-3wn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b-215m_gc"/><path class="c5jc2ztqj"/><path class="nzm6g-3wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cd-rom-burn"} {...others} />);
}

export default Component;
