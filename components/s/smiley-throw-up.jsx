import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6-iicbjm.css';
import '../../css/u/umq35-bit.css';
import '../../css/z/zjd3yb7vh.css';
import '../../css/y/y20wbpnci.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b6-iicbjm"/><path class="umq35-bit"/><path class="zjd3yb7vh"/><path class="y20wbpnci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-throw-up"} {...others} />);
}

export default Component;
