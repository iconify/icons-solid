import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/udppzu8cu.css';
import '../../css/c/cht1h3b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="udppzu8cu"/><path clip-rule="evenodd" class="cht1h3b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clouds-sharp-fill"} {...others} />);
}

export default Component;
