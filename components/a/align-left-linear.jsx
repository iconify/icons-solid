import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvn4_6iaj.css';
import '../../css/v/v8iefbcvz.css';
import '../../css/r/rns374uuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fvn4_6iaj"/><path class="v8iefbcvz"/><path class="rns374uuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-linear"} {...others} />);
}

export default Component;
