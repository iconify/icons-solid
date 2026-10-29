import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7dpe5z2n.css';
import '../../css/g/gmstibmbn.css';
import '../../css/f/fr8h0cc5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h7dpe5z2n wm-k"/><circle class="gmstibmbn wm-a"/><path class="fr8h0cc5s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-off-solid"} {...others} />);
}

export default Component;
