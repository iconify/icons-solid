import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fosm35z7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fosm35z7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reward-stars-2"} {...others} />);
}

export default Component;
