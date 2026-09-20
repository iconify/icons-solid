import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpsaa-b6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lpsaa-b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:paper-roll-2"} {...others} />);
}

export default Component;
