import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cqnrdhb3z.css';
import '../../css/s/sl9uo94_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="cqnrdhb3z"/><path class="sl9uo94_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-bottom-dashed-sharp-fill"} {...others} />);
}

export default Component;
