import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wlqe03b9w.css';
import '../../css/o/o2jwoih-n.css';
import '../../css/i/irkrcebde.css';
import '../../css/b/b8nn45b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wlqe03b9w wm-shadow"/><path class="o2jwoih-n wm-shadow"/><path class="irkrcebde"/><path class="b8nn45b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shield-half"} {...others} />);
}

export default Component;
