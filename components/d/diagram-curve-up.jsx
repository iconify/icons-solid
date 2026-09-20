import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/u/ugcs83bop.css';
import '../../css/m/m7ah4bbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="ugcs83bop"/><path class="m7ah4bbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:diagram-curve-up"} {...others} />);
}

export default Component;
