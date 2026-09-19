import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/iufgpxbcf.css';
import '../../css/b/b-i2hybmk.css';
import '../../css/n/nfovc7bjf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="iufgpxbcf"/><path class="b-i2hybmk"/><path class="nfovc7bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:people-search"} {...others} />);
}

export default Component;
