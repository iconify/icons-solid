import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';
import '../../css/d/dmzio9b4p.css';
import '../../css/p/paayxvxde.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t-007b-3c"/><path class="fx38fz2eg"/><path class="dmzio9b4p"/><path class="paayxvxde"/><path class="lyw4o5ucl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-broken"} {...others} />);
}

export default Component;
