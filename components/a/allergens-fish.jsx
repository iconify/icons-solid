import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h29u00bfi.css';
import '../../css/i/i7a6vwmyp.css';
import '../../css/y/yaej89vba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h29u00bfi"/><path class="i7a6vwmyp"/><path class="yaej89vba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:allergens-fish"} {...others} />);
}

export default Component;
