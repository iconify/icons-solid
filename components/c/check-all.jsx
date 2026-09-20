import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt1y1kpfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt1y1kpfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:check-all"} {...others} />);
}

export default Component;
