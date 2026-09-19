import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jsspaw5ps.css';
import '../../css/b/bq1lw6byj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jsspaw5ps"/><path class="bq1lw6byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:clipboard"} {...others} />);
}

export default Component;
