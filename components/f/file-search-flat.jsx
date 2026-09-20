import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo2hllb9t.css';
import '../../css/q/qfd72abhl.css';
import '../../css/m/m1ix09kob.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qo2hllb9t"/><path class="qfd72abhl"/><path class="m1ix09kob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-search-flat"} {...others} />);
}

export default Component;
