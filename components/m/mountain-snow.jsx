import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/eevy8sbod.css';
import '../../css/v/v4nnzevee.css';
import '../../css/d/dnqkrib-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="eevy8sbod"/><path class="v4nnzevee"/><path class="dnqkrib-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mountain-snow"} {...others} />);
}

export default Component;
