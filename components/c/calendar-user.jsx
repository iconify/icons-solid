import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o053b3bvz.css';
import '../../css/u/u2os-ab_w.css';
import '../../css/n/n6lpwabqu.css';
import '../../css/n/n-dzcccws.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o053b3bvz"/><path class="u2os-ab_w"/><path class="n6lpwabqu"/><path class="n-dzcccws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:calendar-user"} {...others} />);
}

export default Component;
