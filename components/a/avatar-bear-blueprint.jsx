import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ekj4u08vh.css';
import '../../css/g/g34r-gbul.css';
import '../../css/t/t218te2ox.css';
import '../../css/b/b359zbj2i.css';
import '../../css/i/ipyhocc7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ekj4u08vh wm-deco"/><path class="g34r-gbul wm-deco"/><path class="t218te2ox wm-deco"/><path class="b359zbj2i wm-k"/><path class="ipyhocc7k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bear-blueprint"} {...others} />);
}

export default Component;
