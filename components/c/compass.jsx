import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb9vx4n-w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nb9vx4n-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:compass"} {...others} />);
}

export default Component;
