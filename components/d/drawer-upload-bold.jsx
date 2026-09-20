import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q82_asybb.css';
import '../../css/j/jz4z07ajo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q82_asybb"/><path class="jz4z07ajo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:drawer-upload-bold"} {...others} />);
}

export default Component;
