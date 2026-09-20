import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zw578v39g.css';
import '../../css/l/lpc3kvb6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="zw578v39g"/><path class="lpc3kvb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dice-4"} {...others} />);
}

export default Component;
