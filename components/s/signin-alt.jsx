import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt39gtb6i.css';
import '../../css/f/fk2bifb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt39gtb6i"/><path class="fk2bifb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin-alt"} {...others} />);
}

export default Component;
