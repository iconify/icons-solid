import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sp46y9wqw.css';
import '../../css/k/k7fjn8bbq.css';
import '../../css/j/jx-7c2bxz.css';
import '../../css/d/drdrgzboo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sp46y9wqw"/><path class="k7fjn8bbq"/><path class="jx-7c2bxz"/><path class="drdrgzboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pencil-square"} {...others} />);
}

export default Component;
