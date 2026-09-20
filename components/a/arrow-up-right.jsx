import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w308l4u6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w308l4u6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-up-right"} {...others} />);
}

export default Component;
