import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shpzc8bzi.css';
import '../../css/h/h9q4084iu.css';
import '../../css/p/pj3y1bc7z.css';
import '../../css/u/u-y_iqbft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shpzc8bzi"/><path class="h9q4084iu"/><path class="pj3y1bc7z"/><path class="u-y_iqbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:chrome"} {...others} />);
}

export default Component;
