import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajqdw-o6p.css';
import '../../css/k/kdm5jlb9n.css';
import '../../css/r/rtchpvbvw.css';
import '../../css/v/v-gq4r2to.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ajqdw-o6p"/><path class="kdm5jlb9n"/><path class="rtchpvbvw"/><path class="v-gq4r2to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-broken"} {...others} />);
}

export default Component;
