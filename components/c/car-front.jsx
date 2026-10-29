import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h3pv4t6pq.css';
import '../../css/o/ohgiv6npa.css';
import '../../css/m/mfnafobpd.css';
import '../../css/b/bc1gq95ut.css';
import '../../css/n/nqh6zn5lq.css';
import '../../css/y/ybrrgv7pd.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h3pv4t6pq wm-shadow"/><path class="ohgiv6npa"/><path class="mfnafobpd"/><path class="bc1gq95ut"/><path class="nqh6zn5lq"/><path class="wm-shine ybrrgv7pd"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:car-front"} {...others} />);
}

export default Component;
