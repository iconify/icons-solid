import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/danlpbcqj.css';
import '../../css/h/hihig_9uh.css';
import '../../css/w/wxpwqmb4l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="danlpbcqj"/><path class="hihig_9uh"/><path class="wxpwqmb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:download-arrow"} {...others} />);
}

export default Component;
