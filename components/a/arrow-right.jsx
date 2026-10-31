import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/whgwbv7tv.css';
import '../../css/x/xb_55wbon.css';
import '../../css/h/heqoxib7c.css';
import '../../css/m/mmnavtbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="whgwbv7tv wm-shadow"/><path class="wm-shadow xb_55wbon"/><path class="heqoxib7c"/><path class="mmnavtbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-right"} {...others} />);
}

export default Component;
