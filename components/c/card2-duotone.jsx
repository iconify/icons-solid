import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5lvgfumw.css';
import '../../css/f/fhca1iukl.css';
import '../../css/s/snz2-0xxd.css';
import '../../css/u/uped8l_dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k5lvgfumw"/><path class="fhca1iukl"/><path clip-rule="evenodd" class="snz2-0xxd"/><path class="uped8l_dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card2-duotone"} {...others} />);
}

export default Component;
