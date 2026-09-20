import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tih9fbbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tih9fbbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:globe-plus"} {...others} />);
}

export default Component;
