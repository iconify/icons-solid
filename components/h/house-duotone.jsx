import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8ivs9bqv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu7tsdzwi.css';
import '../../css/h/httstt_8v.css';
import '../../css/e/ec02wkbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG9mmdqcjr" class="l8ivs9bqv"/></defs><g class="cuyn6tgcc"><path clip-rule="evenodd" class="gu7tsdzwi"/><g clip-rule="evenodd" class="httstt_8v"><use href="#SVG9mmdqcjr"/><use href="#SVG9mmdqcjr"/></g><path class="ec02wkbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:house-duotone"} {...others} />);
}

export default Component;
