import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txgxg6k-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txgxg6k-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:presentation-line"} {...others} />);
}

export default Component;
