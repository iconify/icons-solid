import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6vqvxbgz.css';
import '../../css/x/xgh5sp86e.css';
import '../../css/u/uuq0qhh6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q6vqvxbgz"/><path class="xgh5sp86e"/><path class="uuq0qhh6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:money-cash-bill"} {...others} />);
}

export default Component;
