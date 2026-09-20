import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7__fxb2p.css';
import '../../css/m/m88tpc5vd.css';
import '../../css/y/yie9lh1_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j7__fxb2p"/><path class="m88tpc5vd"/><path class="yie9lh1_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:android-settings"} {...others} />);
}

export default Component;
