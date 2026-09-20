import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg3jmh0xv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg3jmh0xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-left-right-bold-outline"} {...others} />);
}

export default Component;
