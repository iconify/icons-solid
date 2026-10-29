import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/plhvrsb6r.css';
import '../../css/g/g0jhk334h.css';
import '../../css/a/aedlnnets.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="plhvrsb6r"/><path class="g0jhk334h wm-a"/><path class="aedlnnets"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:soup-duo"} {...others} />);
}

export default Component;
