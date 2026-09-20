import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed0ui5bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed0ui5bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:confetti-off"} {...others} />);
}

export default Component;
