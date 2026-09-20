import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h64qreepf.css';
import '../../css/b/bhgkc_7kn.css';
import '../../css/n/n0crg69zm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h64qreepf"/><path class="bhgkc_7kn"/><path class="n0crg69zm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vinyl-record-line-duotone"} {...others} />);
}

export default Component;
