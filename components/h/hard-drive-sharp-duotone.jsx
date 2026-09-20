import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i4hho8ioh.css';
import '../../css/w/wt2sl3biy.css';
import '../../css/n/nuq8w1bat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i4hho8ioh"/><path class="wt2sl3biy"/><path clip-rule="evenodd" class="nuq8w1bat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hard-drive-sharp-duotone"} {...others} />);
}

export default Component;
