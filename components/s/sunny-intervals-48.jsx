import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb9i7xbnr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fb9i7xbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sunny-intervals-48"} {...others} />);
}

export default Component;
