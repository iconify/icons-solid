import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-usqibey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-usqibey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-3d-nozzle-off"} {...others} />);
}

export default Component;
