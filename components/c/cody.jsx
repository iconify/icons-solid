import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lg3oiabbn.css';
import '../../css/l/l41a-6b0f.css';
import '../../css/m/mow9f5btu.css';

const viewBox = {"width":55,"height":50};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lg3oiabbn"/><path class="l41a-6b0f"/><path class="mow9f5btu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cody"} {...others} />);
}

export default Component;
