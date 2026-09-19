import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bcpfhjh0w.css';
import '../../css/s/suorp_b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bcpfhjh0w"/><path class="suorp_b8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cone-01"} {...others} />);
}

export default Component;
