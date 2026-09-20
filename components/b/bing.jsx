import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2i50-arv.css';
import '../../css/a/adhi_y29i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2i50-arv"/><path class="adhi_y29i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:bing"} {...others} />);
}

export default Component;
