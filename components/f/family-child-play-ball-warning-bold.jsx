import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0rsvtb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0rsvtb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:family-child-play-ball-warning-bold"} {...others} />);
}

export default Component;
