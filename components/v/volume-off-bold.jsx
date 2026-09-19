import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/r/r3njy2b3d.css';
import '../../css/j/jskd55kvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="r3njy2b3d"/><path class="jskd55kvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:volume-off-bold"} {...others} />);
}

export default Component;
