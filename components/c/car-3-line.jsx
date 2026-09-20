import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcw6geb7z.css';
import '../../css/k/k6tg6_vxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcw6geb7z"/><path class="k6tg6_vxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:car-3-line"} {...others} />);
}

export default Component;
