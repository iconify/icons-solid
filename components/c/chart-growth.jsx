import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuz3g9p4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wuz3g9p4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:chart-growth"} {...others} />);
}

export default Component;
