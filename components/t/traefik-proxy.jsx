import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc2uxhxzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc2uxhxzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:traefik-proxy"} {...others} />);
}

export default Component;
