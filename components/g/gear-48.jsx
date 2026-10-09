import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvv10bauq.css';
import '../../css/h/h-_usl8fm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zvv10bauq"/><path class="h-_usl8fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gear-48"} {...others} />);
}

export default Component;
