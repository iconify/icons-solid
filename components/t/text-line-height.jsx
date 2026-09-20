import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v4-9_wv8t.css';
import '../../css/t/t04y93jxd.css';
import '../../css/h/hk6vdne3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v4-9_wv8t"/><path class="t04y93jxd"/><path class="hk6vdne3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-line-height"} {...others} />);
}

export default Component;
