import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpm84vuob.css';
import '../../css/s/skrk68u9x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dpm84vuob"/><path class="skrk68u9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hierarchy-10"} {...others} />);
}

export default Component;
