import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hptydwbgf.css';
import '../../css/e/elvpq5qeq.css';
import '../../css/x/xmn27y5eu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hptydwbgf"/><path class="elvpq5qeq"/><path class="xmn27y5eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mop-48-bold"} {...others} />);
}

export default Component;
