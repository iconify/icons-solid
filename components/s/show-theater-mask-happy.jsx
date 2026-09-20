import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e34m714wy.css';
import '../../css/w/wv2bapjvm.css';
import '../../css/s/si9n0oe7j.css';
import '../../css/g/gplvzs_py.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e34m714wy"/><path class="wv2bapjvm"/><path class="si9n0oe7j"/><path class="gplvzs_py"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:show-theater-mask-happy"} {...others} />);
}

export default Component;
