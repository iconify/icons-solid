import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o19c6vb9o.css';
import '../../css/u/u73cgyakk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="o19c6vb9o wm-k"/><path class="u73cgyakk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folders-gloss"} {...others} />);
}

export default Component;
