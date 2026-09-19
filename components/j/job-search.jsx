import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eh311nzoy.css';
import '../../css/f/fjk1_yb_p.css';
import '../../css/i/iqlx6k-bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eh311nzoy"/><path class="fjk1_yb_p"/><path class="iqlx6k-bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:job-search"} {...others} />);
}

export default Component;
