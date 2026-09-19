import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go23rjbfx.css';
import '../../css/m/md286fbip.css';
import '../../css/p/ppqywzgqr.css';
import '../../css/f/f37v2630u.css';
import '../../css/m/msfqnu7st.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="go23rjbfx"/><g class="md286fbip"><path class="ppqywzgqr"/><path class="f37v2630u"/><path class="msfqnu7st"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:elec"} {...others} />);
}

export default Component;
