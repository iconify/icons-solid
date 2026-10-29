import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvhh2lbvl.css';
import '../../css/i/i-rn02bjr.css';
import '../../css/n/n4eh1nbsq.css';
import '../../css/i/io3y-gido.css';
import '../../css/y/y30-jea1w.css';
import '../../css/u/ug9glxh6y.css';
import '../../css/w/wofkhnl6w.css';
import '../../css/n/n4rkxsj2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvhh2lbvl wm-shadow"/><path class="i-rn02bjr wm-k"/><path class="n4eh1nbsq wm-k"/><path class="io3y-gido wm-a"/><path class="wm-a y30-jea1w"/><path class="ug9glxh6y wm-a"/><path class="wm-a wofkhnl6w"/><path class="n4rkxsj2g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:text-search"} {...others} />);
}

export default Component;
