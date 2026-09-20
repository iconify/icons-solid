import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vy206ybjy.css';
import '../../css/f/fi4mx6jqq.css';
import '../../css/l/l7v7j6bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vy206ybjy"/><path class="fi4mx6jqq"/><path clip-rule="evenodd" class="l7v7j6bgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:burger"} {...others} />);
}

export default Component;
