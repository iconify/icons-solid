import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mp2i09jnb.css';
import '../../css/y/yovjd0b3i.css';
import '../../css/l/l3k3plb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mp2i09jnb"/><path class="yovjd0b3i"/><path class="l3k3plb5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:browser-key"} {...others} />);
}

export default Component;
