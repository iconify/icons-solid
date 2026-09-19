import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfzeo_bdy.css';
import '../../css/x/xpcktbcyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gfzeo_bdy"/><path class="xpcktbcyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-02"} {...others} />);
}

export default Component;
