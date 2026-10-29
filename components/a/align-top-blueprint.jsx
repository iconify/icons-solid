import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k45-5tb6z.css';
import '../../css/y/yu5a5mbcn.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/j8utzmbct.css';
import '../../css/z/zgn60bcqv.css';
import '../../css/g/gyuc8f-5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k45-5tb6z wm-deco"/><path class="wm-deco yu5a5mbcn"/><path class="o7-ag87sb wm-deco"/><path class="j8utzmbct wm-k"/><path class="wm-a zgn60bcqv"/><path class="gyuc8f-5s wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-top-blueprint"} {...others} />);
}

export default Component;
