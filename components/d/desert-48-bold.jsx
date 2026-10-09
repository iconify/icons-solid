import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdhm6x6mb.css';
import '../../css/h/hlfitnjnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gdhm6x6mb"/><path class="hlfitnjnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desert-48-bold"} {...others} />);
}

export default Component;
