import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa6q8jg6m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aa6q8jg6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:frisbee"} {...others} />);
}

export default Component;
