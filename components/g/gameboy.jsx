import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knpt5p59u.css';
import '../../css/o/oe7093-zs.css';
import '../../css/y/y9pit_b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="knpt5p59u"/><path class="oe7093-zs"/><path class="y9pit_b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gameboy"} {...others} />);
}

export default Component;
