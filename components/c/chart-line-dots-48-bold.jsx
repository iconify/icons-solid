import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/u/up8bcwb4x.css';
import '../../css/a/ajie4vquo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="up8bcwb4x"/><path class="ajie4vquo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-dots-48-bold"} {...others} />);
}

export default Component;
