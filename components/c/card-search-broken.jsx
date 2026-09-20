import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e7djpjbfe.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/a/aaakgqotp.css';
import '../../css/i/i8e2akblu.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e7djpjbfe"/><path class="ktpncgb0v"/><circle class="aaakgqotp"/><path class="i8e2akblu"/><path class="ehgcfqbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-search-broken"} {...others} />);
}

export default Component;
