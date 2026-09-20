import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcog8lbut.css';
import '../../css/e/el4-lhb4r.css';
import '../../css/w/wxs_kkbru.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bcog8lbut"/><path class="el4-lhb4r"/><path class="wxs_kkbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:discussion-converstion-reply"} {...others} />);
}

export default Component;
