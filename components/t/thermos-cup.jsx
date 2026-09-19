import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e1crn0bur.css';
import '../../css/f/f13g7bbsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="e1crn0bur"/><path class="f13g7bbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:thermos-cup"} {...others} />);
}

export default Component;
