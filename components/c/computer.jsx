import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rs7bz-b_v.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/f/f3-0uhbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rs7bz-b_v"/><rect class="m6a3e3btz"/><rect class="f3-0uhbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:computer"} {...others} />);
}

export default Component;
