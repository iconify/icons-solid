import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taopsuymn.css';
import '../../css/y/y9ynmbbhf.css';
import '../../css/s/sxl1tlgcy.css';
import '../../css/m/mel2rybyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="taopsuymn"/><circle class="y9ynmbbhf"/><path class="sxl1tlgcy"/><circle class="mel2rybyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scissors-line-dashed"} {...others} />);
}

export default Component;
