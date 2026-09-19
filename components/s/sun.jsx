import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x_-1fk5qn.css';
import '../../css/i/id7cegb_e.css';
import '../../css/l/loc2q-8hs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x_-1fk5qn"/><path class="id7cegb_e"/><path class="loc2q-8hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sun"} {...others} />);
}

export default Component;
