import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jg9w73huk.css';
import '../../css/m/mhqgp-wgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jg9w73huk"/><path class="mhqgp-wgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pen-1"} {...others} />);
}

export default Component;
