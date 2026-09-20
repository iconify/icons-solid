import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9s618baa.css';
import '../../css/e/ez9x9wbch.css';
import '../../css/y/y-18oobhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y9s618baa"/><path class="ez9x9wbch"/><path class="y-18oobhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizonta-spacing-linear"} {...others} />);
}

export default Component;
