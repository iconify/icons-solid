import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/flh1v0-gj.css';
import '../../css/j/j9hg1or3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="flh1v0-gj"/><path class="j9hg1or3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monument-one"} {...others} />);
}

export default Component;
