import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikdn4vhmj.css';
import '../../css/b/bk8so5b0y.css';
import '../../css/d/dp1-muq0f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ikdn4vhmj"/><path class="bk8so5b0y"/><path class="dp1-muq0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-feedback-heart"} {...others} />);
}

export default Component;
