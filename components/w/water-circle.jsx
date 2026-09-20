import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofhx-bc_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofhx-bc_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:water-circle"} {...others} />);
}

export default Component;
