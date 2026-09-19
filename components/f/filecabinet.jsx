import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2352-x7e.css';
import '../../css/d/ddghisbre.css';
import '../../css/t/t2eq5l4fy.css';
import '../../css/d/dw1cp2bek.css';
import '../../css/m/m_71g0e5i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l2352-x7e"/><path class="ddghisbre"/><path class="t2eq5l4fy"/><path class="dw1cp2bek"/><path class="m_71g0e5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:filecabinet"} {...others} />);
}

export default Component;
