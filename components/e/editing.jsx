import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/niw780buy.css';
import '../../css/u/uodbc-gze.css';
import '../../css/a/aqit9eb6t.css';
import '../../css/t/ttp9gubjw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="niw780buy"/><circle class="uodbc-gze"/><path class="aqit9eb6t"/><path class="ttp9gubjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:editing"} {...others} />);
}

export default Component;
