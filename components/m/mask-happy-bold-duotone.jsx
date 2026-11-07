import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwulmx5uf.css';
import '../../css/j/j07o9nb5s.css';
import '../../css/j/jlk36hbcb.css';
import '../../css/x/xcn7pebsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwulmx5uf"/><path class="j07o9nb5s"/><path class="jlk36hbcb"/><path class="xcn7pebsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happy-bold-duotone"} {...others} />);
}

export default Component;
