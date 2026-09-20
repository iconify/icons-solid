import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlv74gbrp.css';
import '../../css/s/snocxdbcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlv74gbrp"/><path class="snocxdbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-tasks-bold"} {...others} />);
}

export default Component;
