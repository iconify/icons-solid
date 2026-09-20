import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvsj4rbkk.css';
import '../../css/f/f42ipub-z.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="yvsj4rbkk"/><path class="f42ipub-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:time-atack-duotone"} {...others} />);
}

export default Component;
