import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa9a2oboa.css';
import '../../css/w/wwbs7qbyv.css';
import '../../css/a/anua2ob4h.css';
import '../../css/h/h7xnus5-e.css';
import '../../css/u/unefcsbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oa9a2oboa"/><path class="wwbs7qbyv"/><path class="anua2ob4h wm-a"/><path class="h7xnus5-e"/><path class="unefcsbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch-duo"} {...others} />);
}

export default Component;
