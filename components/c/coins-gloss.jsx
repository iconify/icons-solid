import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g09vubc4j.css';
import '../../css/z/zf4bhsw8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="g09vubc4j wm-k"/><path class="wm-a zf4bhsw8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coins-gloss"} {...others} />);
}

export default Component;
