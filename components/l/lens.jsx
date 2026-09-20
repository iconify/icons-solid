import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/w/w3pjnfcgv.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/q/q9h4eqg1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="w3pjnfcgv"/><path class="kv1gi7bvd"/><path class="q9h4eqg1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:lens"} {...others} />);
}

export default Component;
