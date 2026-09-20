import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh8ep-e6w.css';
import '../../css/u/u64nxbbyb.css';
import '../../css/u/uqemucc0s.css';
import '../../css/g/ggpvcmbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eh8ep-e6w"/><path class="u64nxbbyb"/><path class="uqemucc0s"/><path class="ggpvcmbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hospital"} {...others} />);
}

export default Component;
