import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/neqpe-b8w.css';
import '../../css/y/yeinjdbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="neqpe-b8w"/><path class="yeinjdbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:finger-print-remove"} {...others} />);
}

export default Component;
