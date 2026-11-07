import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz49pjc-i.css';
import '../../css/b/bkgssdbwr.css';
import '../../css/m/mmwgdwotp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dz49pjc-i"/><path class="bkgssdbwr"/><path class="mmwgdwotp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-bold"} {...others} />);
}

export default Component;
