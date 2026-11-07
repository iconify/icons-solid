import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kegcs-8wl.css';
import '../../css/u/urak06bsx.css';
import '../../css/m/mucmghbzo.css';
import '../../css/z/zi-y_bbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="kegcs-8wl"/><path class="urak06bsx"/></g><path class="mucmghbzo"/><path class="zi-y_bbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-bold-duotone"} {...others} />);
}

export default Component;
