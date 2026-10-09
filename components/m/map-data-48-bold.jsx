import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9jxscckh.css';
import '../../css/h/hwk25ejtb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r9jxscckh"/><path class="hwk25ejtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-data-48-bold"} {...others} />);
}

export default Component;
