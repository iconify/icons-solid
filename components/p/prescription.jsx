import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s68rhqbhc.css';
import '../../css/j/jt3vpacjn.css';
import '../../css/h/h2u6jfbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s68rhqbhc"/><path class="jt3vpacjn"/><path class="h2u6jfbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:prescription"} {...others} />);
}

export default Component;
