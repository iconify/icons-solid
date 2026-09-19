import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uurkl253c.css';
import '../../css/z/z3m924b_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uurkl253c"/><path class="z3m924b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:expand-left"} {...others} />);
}

export default Component;
