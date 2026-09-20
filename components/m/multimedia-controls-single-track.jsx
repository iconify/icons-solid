import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iq7v8c_9m.css';
import '../../css/l/lzh19ub0z.css';
import '../../css/y/yzgvnp0rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iq7v8c_9m"/><path class="lzh19ub0z"/><path class="yzgvnp0rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:multimedia-controls-single-track"} {...others} />);
}

export default Component;
