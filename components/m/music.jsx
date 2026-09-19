import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/ugmu858cw.css';
import '../../css/j/jroqwgjpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ugmu858cw"/><path class="jroqwgjpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:music"} {...others} />);
}

export default Component;
