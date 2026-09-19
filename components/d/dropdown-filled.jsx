import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyhvu77cm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyhvu77cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dropdown-filled"} {...others} />);
}

export default Component;
