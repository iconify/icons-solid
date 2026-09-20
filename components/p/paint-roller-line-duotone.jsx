import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fme7zr9sh.css';
import '../../css/k/k9mlok3zo.css';
import '../../css/f/ff9gj-ppn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fme7zr9sh"/><path class="k9mlok3zo"/><path class="ff9gj-ppn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-roller-line-duotone"} {...others} />);
}

export default Component;
