import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvsj4rbkk.css';
import '../../css/l/l5qz7fbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="yvsj4rbkk"/><path class="l5qz7fbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-duotone"} {...others} />);
}

export default Component;
