import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/skui-0bnl.css';
import '../../css/m/m97iezbay.css';
import '../../css/m/mjojrgq4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="skui-0bnl"/><path class="m97iezbay"/><path class="mjojrgq4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-broken"} {...others} />);
}

export default Component;
