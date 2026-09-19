import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rq71efbev.css';
import '../../css/j/j-nmpnvye.css';
import '../../css/s/si_c3ty1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rq71efbev"/><path class="j-nmpnvye"/><path class="si_c3ty1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customer-service"} {...others} />);
}

export default Component;
