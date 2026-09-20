import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyd_hm.css';
import '../../css/y/ydovum.css';
import '../../css/e/eu-ltz.css';
import '../../css/m/m5e-la.css';
import '../../css/o/o6uaeu.css';
import '../../css/i/iar8yg.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyd_hm ydovum"/><path class="eu-ltz ydovum"/><path class="m5e-la ydovum"/><path class="o6uaeu ydovum"/><path class="iar8yg ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-filled-loop"} {...others} />);
}

export default Component;
