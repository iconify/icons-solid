import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u3--ljb-e.css';
import '../../css/l/lcl05wufc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u3--ljb-e"/><path class="lcl05wufc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:inbox-post"} {...others} />);
}

export default Component;
