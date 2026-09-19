import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq0e7yb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq0e7yb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dumbbell-alt-filled"} {...others} />);
}

export default Component;
