import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj-g3nbgg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wj-g3nbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:arrow-alt-circle-up"} {...others} />);
}

export default Component;
