import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nb9iv5bjp.css';
import '../../css/u/ub4d63l7m.css';
import '../../css/a/ay4kxuviq.css';
import '../../css/b/bcco9ob2k.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(2 2)" class="bi12bsetm"><path class="nb9iv5bjp"/><circle class="ub4d63l7m"/><circle class="ay4kxuviq"/><path class="bcco9ob2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:face-sad"} {...others} />);
}

export default Component;
