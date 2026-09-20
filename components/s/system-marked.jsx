import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi9s5wb0k.css';
import '../../css/n/nd1akzb8t.css';
import '../../css/d/dh58scy6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qi9s5wb0k"/><path class="nd1akzb8t"/><path class="dh58scy6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-marked"} {...others} />);
}

export default Component;
