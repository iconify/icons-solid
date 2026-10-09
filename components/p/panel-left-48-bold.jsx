import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrk88uxja.css';
import '../../css/h/h5cjzi0kr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qrk88uxja"/><path class="h5cjzi0kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-48-bold"} {...others} />);
}

export default Component;
