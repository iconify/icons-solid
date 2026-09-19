import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6u7tw-2d.css';
import '../../css/b/by38gccqr.css';
import '../../css/y/y_-z-8r0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b j6u7tw-2d"/><path class="b by38gccqr"/><path class="b y_-z-8r0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-alt"} {...others} />);
}

export default Component;
