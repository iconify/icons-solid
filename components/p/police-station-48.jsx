import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-t59ibaj.css';
import '../../css/i/i6195bbek.css';
import '../../css/l/l36i_0bet.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h-t59ibaj"/><path class="i6195bbek"/><path class="l36i_0bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:police-station-48"} {...others} />);
}

export default Component;
