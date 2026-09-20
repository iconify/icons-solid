import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my-q2jn-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="my-q2jn-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:link-variant-remove"} {...others} />);
}

export default Component;
