import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm5x-vbjq.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="xm5x-vbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:cc-diners-club"} {...others} />);
}

export default Component;
