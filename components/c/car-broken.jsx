import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/veyyb0srw.css';
import '../../css/b/be3goyo9p.css';
import '../../css/t/tf5n4ib8z.css';
import '../../css/x/xbpaam-ee.css';
import '../../css/k/kjdqdibrw.css';
import '../../css/f/f65xbnl5h.css';
import '../../css/m/m73qz7bym.css';
import '../../css/s/swhtzkbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="veyyb0srw"/><path class="be3goyo9p"/><path class="tf5n4ib8z"/><path class="xbpaam-ee"/><path class="kjdqdibrw"/><path class="f65xbnl5h"/><path class="m73qz7bym"/><path class="swhtzkbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-broken"} {...others} />);
}

export default Component;
