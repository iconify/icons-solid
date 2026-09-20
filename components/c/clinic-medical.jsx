import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llhl38_wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="llhl38_wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:clinic-medical"} {...others} />);
}

export default Component;
