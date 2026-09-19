import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kc7gafb7l.css';
import '../../css/r/rpuylvrbq.css';
import '../../css/p/pwjypgovl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kc7gafb7l"/><path class="rpuylvrbq"/><path class="pwjypgovl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vynil-02"} {...others} />);
}

export default Component;
