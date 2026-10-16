import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cht574biq.css';
import '../../css/y/yhb26obxy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cht574biq"/><path class="yhb26obxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reactor-48"} {...others} />);
}

export default Component;
