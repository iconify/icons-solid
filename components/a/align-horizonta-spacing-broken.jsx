import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9s618baa.css';
import '../../css/y/yhxk83rhw.css';
import '../../css/v/vi9tggbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y9s618baa"/><path class="yhxk83rhw"/><path class="vi9tggbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizonta-spacing-broken"} {...others} />);
}

export default Component;
