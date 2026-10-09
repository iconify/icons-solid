import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7o6v4tnd.css';
import '../../css/r/rargr9bqu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j7o6v4tnd"/><path class="rargr9bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-up-48-bold"} {...others} />);
}

export default Component;
