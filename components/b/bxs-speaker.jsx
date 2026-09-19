import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz9ucbcni.css';
import '../../css/j/j6-b0layc.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="wz9ucbcni"/><path class="j6-b0layc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-speaker"} {...others} />);
}

export default Component;
