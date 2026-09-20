import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vewoeyc8e.css';
import '../../css/x/xazw8vl9y.css';
import '../../css/l/lfxdv5jzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vewoeyc8e"/><path class="xazw8vl9y"/><path class="lfxdv5jzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:multimedia-controls-loop-arrow-1"} {...others} />);
}

export default Component;
