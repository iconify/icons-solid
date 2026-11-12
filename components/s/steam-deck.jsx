import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7ejzmb6d.css';
import '../../css/u/ul6axlxqn.css';
import '../../css/g/g74guoafd.css';
import '../../css/c/ct___5r2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d7ejzmb6d"/><linearGradient id="SVGERMAK8Ok" x1="33" x2="327" y1="64.3" y2="418.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="ul6axlxqn"/><stop offset="1" class="g74guoafd"/></linearGradient><path fill="url(#SVGERMAK8Ok)" class="ct___5r2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steam-deck"} {...others} />);
}

export default Component;
