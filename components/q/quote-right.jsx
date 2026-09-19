import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7o8dkb3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g7o8dkb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:quote-right"} {...others} />);
}

export default Component;
