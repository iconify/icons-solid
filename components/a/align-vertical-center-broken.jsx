import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aed5lhbuz.css';
import '../../css/d/dfh-rj50l.css';
import '../../css/a/avlf34b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aed5lhbuz"/><path class="dfh-rj50l"/><path class="avlf34b0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-center-broken"} {...others} />);
}

export default Component;
