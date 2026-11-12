import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atsgvzujm.css';
import '../../css/a/a-w0k537t.css';
import '../../css/i/iid5rgj_v.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGBsmEEePQ" x1="0" x2="1" y1="0" y2="0"><stop offset="0" class="atsgvzujm"/><stop offset="1" class="a-w0k537t"/></linearGradient></defs><path fill="url(#SVGBsmEEePQ)" class="iid5rgj_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:unraid"} {...others} />);
}

export default Component;
