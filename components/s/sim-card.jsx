import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od2b1-boe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="od2b1-boe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:sim-card"} {...others} />);
}

export default Component;
