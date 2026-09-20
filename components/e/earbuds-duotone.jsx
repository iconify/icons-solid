import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc44scclm.css';
import '../../css/i/iwisbda8z.css';
import '../../css/j/jkh-81bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pc44scclm"/><path class="iwisbda8z"/><path class="jkh-81bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:earbuds-duotone"} {...others} />);
}

export default Component;
