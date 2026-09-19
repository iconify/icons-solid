import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/amm3vz60d.css';
import '../../css/z/z7szs-qkm.css';
import '../../css/w/w5r3v6b7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="amm3vz60d"/><path class="z7szs-qkm"/><path class="w5r3v6b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tif-format"} {...others} />);
}

export default Component;
