import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v45vzdbvb.css';
import '../../css/k/k9nw0wpfg.css';
import '../../css/d/dfpusmurg.css';

const viewBox = {"width":691,"height":209};
const content = `<g class="v45vzdbvb"><path class="k9nw0wpfg"/><path class="dfpusmurg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mulesoft"} {...others} />);
}

export default Component;
