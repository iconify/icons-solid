import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e50mt6bob.css';
import '../../css/u/utd-bfbel.css';
import '../../css/y/ypn17wb8p.css';
import '../../css/z/zsg_r1znm.css';
import '../../css/x/xddvelz_x.css';
import '../../css/w/wxv7c0bzd.css';
import '../../css/x/x6ki1ccez.css';
import '../../css/i/irkbxibwr.css';
import '../../css/d/dto45zb9o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e50mt6bob"/><ellipse transform="rotate(-56.23 31.584 51.769)" class="utd-bfbel"/><path class="ypn17wb8p"/><path class="zsg_r1znm"/><ellipse transform="rotate(-62.65 23.568 47.537)" class="xddvelz_x"/><path class="wxv7c0bzd"/><path class="x6ki1ccez"/><rect transform="rotate(-60 39.024 30.158)" class="irkbxibwr"/><circle class="dto45zb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:swab-pliers"} {...others} />);
}

export default Component;
