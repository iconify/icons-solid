import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_q60hbmc.css';
import '../../css/v/vlw_01baz.css';
import '../../css/g/gxf5i4yhj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_q60hbmc"/><path class="vlw_01baz"/><path class="gxf5i4yhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gauge-48-bold"} {...others} />);
}

export default Component;
