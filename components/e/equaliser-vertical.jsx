import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntc5j9rdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntc5j9rdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:equaliser-vertical"} {...others} />);
}

export default Component;
