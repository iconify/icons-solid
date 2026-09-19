import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j3wgoubmz.css';
import '../../css/f/fonskebzw.css';
import '../../css/k/k_a-7jb4j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j3wgoubmz"/><path class="fonskebzw"/><path class="k_a-7jb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mark"} {...others} />);
}

export default Component;
