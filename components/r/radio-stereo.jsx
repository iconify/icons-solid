import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_jhw6a2d.css';
import '../../css/w/wvb73fi4u.css';
import '../../css/j/jqadry37o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b_jhw6a2d"/><path class="wvb73fi4u"/><path class="jqadry37o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:radio-stereo"} {...others} />);
}

export default Component;
