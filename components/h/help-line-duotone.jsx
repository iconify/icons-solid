import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tof57eb9e.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tof57eb9e"/><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:help-line-duotone"} {...others} />);
}

export default Component;
