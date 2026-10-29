import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fcetjhbki.css';
import '../../css/p/pqtufebet.css';
import '../../css/i/i0a_nyk6o.css';
import '../../css/m/mv4mpebft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fcetjhbki"/><path class="pqtufebet wm-a"/><path class="i0a_nyk6o wm-a"/><path class="mv4mpebft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dental-chair-duo"} {...others} />);
}

export default Component;
