import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urkil0hoe.css';
import '../../css/p/poavjmspy.css';
import '../../css/u/uiw3i6b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="urkil0hoe"/><path class="poavjmspy"/><path class="uiw3i6b0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:credit-card-2-flat"} {...others} />);
}

export default Component;
