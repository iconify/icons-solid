import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l4nurs30k.css';
import '../../css/p/p68x__xhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l4nurs30k"/><path class="p68x__xhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:contact-book"} {...others} />);
}

export default Component;
