import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c-fn48bus.css';
import '../../css/a/a-22vyg5o.css';
import '../../css/x/xe6tfdcfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="c-fn48bus"/><path class="a-22vyg5o"/><path clip-rule="evenodd" class="xe6tfdcfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-notes-sharp-duotone"} {...others} />);
}

export default Component;
