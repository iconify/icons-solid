import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jz-mj0_jb.css';
import '../../css/a/ak742-b8l.css';
import '../../css/e/evq4mdbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jz-mj0_jb"/><path class="ak742-b8l"/><path class="evq4mdbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lift-truck"} {...others} />);
}

export default Component;
