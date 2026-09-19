import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lg9f0hy7x.css';
import '../../css/a/a10evxbfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="lg9f0hy7x"/><path class="a10evxbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mirror-one"} {...others} />);
}

export default Component;
