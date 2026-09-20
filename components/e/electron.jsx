import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgsrnm8tv.css';
import '../../css/j/jfl1m_hze.css';
import '../../css/g/gv6pv-b2u.css';
import '../../css/k/kf3ab9vwr.css';
import '../../css/f/fin7epbed.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="sgsrnm8tv"/><path class="jfl1m_hze"/><path class="gv6pv-b2u"/><path class="kf3ab9vwr"/><path class="fin7epbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:electron"} {...others} />);
}

export default Component;
