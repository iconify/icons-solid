import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k8q120b9o.css';
import '../../css/f/fh0zq9b-s.css';
import '../../css/m/m4w84s94u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k8q120b9o"/><path class="fh0zq9b-s"/><path class="m4w84s94u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-broken"} {...others} />);
}

export default Component;
