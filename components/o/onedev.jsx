import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fumtpyb2y.css';
import '../../css/q/q0nsod9nw.css';
import '../../css/b/bvd_dyb2w.css';

const viewBox = {"width":630,"height":630,"left":200,"top":200};
const content = `<g paint-order="stroke"><path class="fumtpyb2y"/><path class="q0nsod9nw"/><path class="bvd_dyb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:onedev"} {...others} />);
}

export default Component;
