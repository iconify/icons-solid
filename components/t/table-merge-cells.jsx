import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox9j4lbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox9j4lbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:table-merge-cells"} {...others} />);
}

export default Component;
