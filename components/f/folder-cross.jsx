import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/opab9rbfl.css';
import '../../css/f/f5d9bsb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="opab9rbfl"/><path class="f5d9bsb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:folder-cross"} {...others} />);
}

export default Component;
