import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duu6_4t6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duu6_4t6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-bottom-right-thin"} {...others} />);
}

export default Component;
