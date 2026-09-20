import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/we5pfbc7i.css';
import '../../css/w/w_9u0rbob.css';
import '../../css/c/czwys_6ab.css';
import '../../css/u/ulwx7ibev.css';
import '../../css/y/ypkivh3mh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="we5pfbc7i"/><path class="w_9u0rbob"/><path class="czwys_6ab"/><path class="ulwx7ibev"/><path class="ypkivh3mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-line-duotone"} {...others} />);
}

export default Component;
