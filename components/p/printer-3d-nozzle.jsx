import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mng4_v46u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mng4_v46u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-3d-nozzle"} {...others} />);
}

export default Component;
