import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3eseacbm.css';
import '../../css/n/nc_t_0bbz.css';
import '../../css/a/avq41vbrm.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="d3eseacbm"/><path class="nc_t_0bbz"/><path class="avq41vbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pocketbase"} {...others} />);
}

export default Component;
