import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0k13pbix.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/a/az_ciac9b.css';
import '../../css/l/lh5zdobrs.css';
import '../../css/a/ag8wa9y2n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z0k13pbix"/><path class="vzvjqggfh"/><path class="az_ciac9b"/><path class="lh5zdobrs"/><path class="ag8wa9y2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bar-chart"} {...others} />);
}

export default Component;
