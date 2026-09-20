import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mp2i09jnb.css';
import '../../css/j/j-knq17ur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mp2i09jnb"/><path class="j-knq17ur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:browser-code-2"} {...others} />);
}

export default Component;
