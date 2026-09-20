import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aqg2-5bbs.css';
import '../../css/k/kib7r1wvv.css';
import '../../css/k/kvsiuof9s.css';
import '../../css/v/vri-l7yab.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="aqg2-5bbs"/><path class="kib7r1wvv"/><path class="kvsiuof9s"/><path class="vri-l7yab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-error-404-not-found"} {...others} />);
}

export default Component;
