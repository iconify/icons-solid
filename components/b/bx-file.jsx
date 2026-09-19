import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8wp0nbtd.css';
import '../../css/m/m5ioxlbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8wp0nbtd"/><path class="m5ioxlbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-file"} {...others} />);
}

export default Component;
