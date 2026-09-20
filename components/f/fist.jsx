import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvcsmybba.css';
import '../../css/t/t1c71cjft.css';
import '../../css/h/hr1rg6bkc.css';
import '../../css/t/t66l_ccom.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tvcsmybba"/><path class="t1c71cjft"/><path class="hr1rg6bkc"/><path class="t66l_ccom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fist"} {...others} />);
}

export default Component;
