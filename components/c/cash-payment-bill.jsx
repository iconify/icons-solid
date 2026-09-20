import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb42c5btj.css';
import '../../css/f/fbip6cc2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wb42c5btj"/><path class="fbip6cc2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-bill"} {...others} />);
}

export default Component;
