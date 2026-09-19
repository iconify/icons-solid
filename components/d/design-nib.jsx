import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/anf-_cbee.css';
import '../../css/c/csjv3olpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="anf-_cbee"/><path class="csjv3olpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:design-nib"} {...others} />);
}

export default Component;
