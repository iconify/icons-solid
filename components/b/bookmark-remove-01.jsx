import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tz70rrb9c.css';
import '../../css/s/sbf0mdb_x.css';
import '../../css/k/ksody8b7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tz70rrb9c"/><path class="sbf0mdb_x"/><path class="ksody8b7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-remove-01"} {...others} />);
}

export default Component;
