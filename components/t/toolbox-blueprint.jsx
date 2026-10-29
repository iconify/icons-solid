import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hiakk2yzj.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/p/puikbyp4x.css';
import '../../css/v/v6yzk-b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hiakk2yzj wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="puikbyp4x wm-k"/><path class="v6yzk-b5c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toolbox-blueprint"} {...others} />);
}

export default Component;
