import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzfjmnikp.css';
import '../../css/v/v54vc0bdn.css';
import '../../css/u/ua_243ozi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yzfjmnikp"/><path class="v54vc0bdn"/><path class="ua_243ozi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gem-star"} {...others} />);
}

export default Component;
