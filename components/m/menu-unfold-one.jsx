import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fawnadrdb.css';
import '../../css/a/a9kdh9bkj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fawnadrdb"/><path class="a9kdh9bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:menu-unfold-one"} {...others} />);
}

export default Component;
