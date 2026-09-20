import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zbwg-d8nv.css';
import '../../css/o/oa-898b0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zbwg-d8nv"/><path class="oa-898b0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-laptop"} {...others} />);
}

export default Component;
