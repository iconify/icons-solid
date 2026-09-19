import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvqpbpbpk.css';
import '../../css/g/gpfbyab6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvqpbpbpk"/><path class="gpfbyab6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-blender"} {...others} />);
}

export default Component;
