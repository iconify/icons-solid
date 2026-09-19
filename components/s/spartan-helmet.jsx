import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egak3fwoq.css';
import '../../css/o/ofcl--b6c.css';
import '../../css/x/xj9isublb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="egak3fwoq"/><path class="ofcl--b6c"/><path class="xj9isublb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spartan-helmet"} {...others} />);
}

export default Component;
