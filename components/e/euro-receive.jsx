import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rxd_zkzui.css';
import '../../css/v/vqbyr6ydp.css';
import '../../css/o/oz_6r38tv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rxd_zkzui"/><path class="vqbyr6ydp"/><path class="oz_6r38tv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:euro-receive"} {...others} />);
}

export default Component;
