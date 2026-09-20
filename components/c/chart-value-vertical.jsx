import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf7fl8b9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="yf7fl8b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chart-value-vertical"} {...others} />);
}

export default Component;
