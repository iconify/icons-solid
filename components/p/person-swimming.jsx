import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kywvyf-jq.css';
import '../../css/y/y8am02b7f.css';
import '../../css/m/m0umqsjpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kywvyf-jq"/><path class="y8am02b7f"/><path class="m0umqsjpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:person-swimming"} {...others} />);
}

export default Component;
