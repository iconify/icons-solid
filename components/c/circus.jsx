import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uetx09b4z.css';
import '../../css/v/vyb-o5bdg.css';
import '../../css/d/dhqxk7b6m.css';
import '../../css/e/ewg6ksbdr.css';
import '../../css/h/hdtngbcge.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="uetx09b4z"/><path class="vyb-o5bdg"/><path class="dhqxk7b6m"/><path class="ewg6ksbdr"/><path class="hdtngbcge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:circus"} {...others} />);
}

export default Component;
