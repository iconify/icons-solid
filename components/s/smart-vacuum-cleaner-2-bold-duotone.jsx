import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v5wadhqzm.css';
import '../../css/f/fua2m0b8b.css';
import '../../css/u/uvu9w-b5w.css';
import '../../css/x/x084lm06v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="v5wadhqzm"/><path class="fua2m0b8b"/></g><path class="uvu9w-b5w"/><path clip-rule="evenodd" class="x084lm06v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-2-bold-duotone"} {...others} />);
}

export default Component;
