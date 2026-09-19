import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud9xtmhvv.css';
import '../../css/m/mxpx1okuh.css';
import '../../css/w/w_fsjlwse.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud9xtmhvv"/><path class="mxpx1okuh"/><path class="w_fsjlwse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:aok"} {...others} />);
}

export default Component;
