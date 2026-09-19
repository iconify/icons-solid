import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/u43xw6b7o.css';
import '../../css/l/lqwcol_8m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="u43xw6b7o"/><path class="lqwcol_8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:report"} {...others} />);
}

export default Component;
