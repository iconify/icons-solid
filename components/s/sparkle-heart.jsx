import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0t-izetn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v0t-izetn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:sparkle-heart"} {...others} />);
}

export default Component;
