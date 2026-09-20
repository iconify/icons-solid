import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3_f46b6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3_f46b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:archive-alert-outline"} {...others} />);
}

export default Component;
