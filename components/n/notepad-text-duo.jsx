import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vyc35wp7q.css';
import '../../css/p/pappmcc6h.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/b/bamhgjb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vyc35wp7q"/><path class="pappmcc6h wm-a"/><path class="uylg6bcvj"/><path class="bamhgjb2p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notepad-text-duo"} {...others} />);
}

export default Component;
