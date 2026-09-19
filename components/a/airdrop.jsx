import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3vlh0i5k.css';
import '../../css/s/sv46fbc_x.css';
import '../../css/j/jvu6wz0nf.css';
import '../../css/d/dzz9y9h1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="p3vlh0i5k"/><path class="sv46fbc_x"/><path class="jvu6wz0nf"/><path class="dzz9y9h1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airdrop"} {...others} />);
}

export default Component;
