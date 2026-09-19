import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zudc4ebwq.css';
import '../../css/y/y3t9q1bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zudc4ebwq"/><path class="y3t9q1bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:captions-cc"} {...others} />);
}

export default Component;
