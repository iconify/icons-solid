import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i7yq0bv7m.css';
import '../../css/q/q4ps16bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i7yq0bv7m"/><path class="q4ps16bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:upload"} {...others} />);
}

export default Component;
