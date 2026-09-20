import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-rs9ub5w.css';
import '../../css/f/f3xbde9dh.css';
import '../../css/g/gmey1up1z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x-rs9ub5w"/><path class="f3xbde9dh"/><path class="gmey1up1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rain-cloud"} {...others} />);
}

export default Component;
