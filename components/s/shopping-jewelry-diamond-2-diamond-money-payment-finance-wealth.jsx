import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t2idk5bjf.css';
import '../../css/h/hxruvww_f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t2idk5bjf"/><path class="hxruvww_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth"} {...others} />);
}

export default Component;
