import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la_t-mbtc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="la_t-mbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:headset-stroke-20"} {...others} />);
}

export default Component;
