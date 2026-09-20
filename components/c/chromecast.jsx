import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf1lcdbbf.css';
import '../../css/l/li-08qb4y.css';
import '../../css/n/nrth2abtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rf1lcdbbf"/><path class="li-08qb4y"/><path class="nrth2abtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast"} {...others} />);
}

export default Component;
