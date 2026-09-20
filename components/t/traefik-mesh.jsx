import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sor50jj-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sor50jj-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:traefik-mesh"} {...others} />);
}

export default Component;
