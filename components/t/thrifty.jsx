import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4-vtpbnb.css';
import '../../css/x/xtnibnbva.css';
import '../../css/h/hn9ztn5zb.css';
import '../../css/a/aszoa8b8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u4-vtpbnb"/><path class="xtnibnbva"/><path class="hn9ztn5zb"/><path class="aszoa8b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:thrifty"} {...others} />);
}

export default Component;
