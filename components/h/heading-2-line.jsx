import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frf-6rb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frf-6rb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heading-2-line"} {...others} />);
}

export default Component;
