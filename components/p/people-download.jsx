import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/iufgpxbcf.css';
import '../../css/u/utoe8x85b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="iufgpxbcf"/><path class="utoe8x85b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-download"} {...others} />);
}

export default Component;
