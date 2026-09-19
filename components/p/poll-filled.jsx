import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5xbnj3bp.css';
import '../../css/t/t1563xbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5xbnj3bp"/><rect class="t1563xbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:poll-filled"} {...others} />);
}

export default Component;
