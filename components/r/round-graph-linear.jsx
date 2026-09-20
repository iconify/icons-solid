import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gsb-xubkp.css';
import '../../css/z/zgimw8w5b.css';
import '../../css/a/a09g2ehcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gsb-xubkp"/><path class="zgimw8w5b"/><path class="a09g2ehcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-graph-linear"} {...others} />);
}

export default Component;
