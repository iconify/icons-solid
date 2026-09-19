import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m19nw0dzp.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="m19nw0dzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:jet-fighter"} {...others} />);
}

export default Component;
