import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-tf9xb7m.css';
import '../../css/q/qqhbc_oik.css';
import '../../css/b/ba4k5pb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z-tf9xb7m"/><path class="qqhbc_oik"/><path class="ba4k5pb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-bold-duotone"} {...others} />);
}

export default Component;
