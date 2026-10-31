import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h5g3hnbrk.css';
import '../../css/u/uvcxoxnpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="h5g3hnbrk wm-k"/><path class="uvcxoxnpe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wreath-gloss"} {...others} />);
}

export default Component;
