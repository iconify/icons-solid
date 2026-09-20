import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-7l0kbto.css';
import '../../css/w/w8xo6-imr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j-7l0kbto"/><path class="w8xo6-imr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-bolt"} {...others} />);
}

export default Component;
