import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/s/srz_u_got.css';
import '../../css/q/q2lyozz0h.css';
import '../../css/e/e7i08vb4v.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="srz_u_got"/><path class="q2lyozz0h"/><path class="e7i08vb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:safety"} {...others} />);
}

export default Component;
