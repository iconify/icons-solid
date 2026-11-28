import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc9fepjks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc9fepjks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:bar-chart-horizontal"} {...others} />);
}

export default Component;
