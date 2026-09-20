import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9xg5d.css';
import '../../css/y/ydovum.css';
import '../../css/u/ul5pkm.css';
import '../../css/m/mzhj7m.css';
import '../../css/q/qi810h.css';
import '../../css/j/jhjq8f.css';
import '../../css/e/eoxhsr.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9xg5d ydovum"/><circle class="ul5pkm ydovum"/><circle class="mzhj7m ydovum"/><circle class="qi810h ydovum"/><circle class="jhjq8f ydovum"/><circle class="eoxhsr ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cookie-twotone"} {...others} />);
}

export default Component;
