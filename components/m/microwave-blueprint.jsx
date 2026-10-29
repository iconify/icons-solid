import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/br15_2bxe.css';
import '../../css/l/l00otmbzz.css';
import '../../css/c/cp6jlib5e.css';
import '../../css/j/j2c-0_buh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="br15_2bxe wm-deco"/><path class="l00otmbzz wm-deco"/><path class="cp6jlib5e wm-k"/><path class="j2c-0_buh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microwave-blueprint"} {...others} />);
}

export default Component;
