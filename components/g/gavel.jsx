import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bn86mnb_m.css';
import '../../css/a/at9kptbty.css';
import '../../css/i/i4hn_5bow.css';
import '../../css/k/kng0k0-0g.css';
import '../../css/x/xayuqn0kz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bn86mnb_m wm-shadow"/><path class="at9kptbty wm-shadow"/><path class="i4hn_5bow"/><path class="kng0k0-0g"/><path class="wm-s xayuqn0kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gavel"} {...others} />);
}

export default Component;
