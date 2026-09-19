import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uocdgacuo.css';
import '../../css/k/klnck4b6u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uocdgacuo"/><path class="klnck4b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-search"} {...others} />);
}

export default Component;
