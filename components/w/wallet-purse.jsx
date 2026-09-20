import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hr79wmn2h.css';
import '../../css/l/l9sh7aboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hr79wmn2h"/><path class="l9sh7aboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:wallet-purse"} {...others} />);
}

export default Component;
