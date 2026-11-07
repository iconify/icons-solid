import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt_ga9x1x.css';
import '../../css/k/k2crqybes.css';
import '../../css/l/lcil0k4ow.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wt_ga9x1x"/><path class="k2crqybes"/><path class="lcil0k4ow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-sale-outline"} {...others} />);
}

export default Component;
