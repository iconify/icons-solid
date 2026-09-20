import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wceggdbtg.css';
import '../../css/i/ingyikb1h.css';
import '../../css/n/nuhr8n-hs.css';
import '../../css/i/iwelwt5qg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wceggdbtg"/><path class="ingyikb1h"/><path class="nuhr8n-hs"/><path clip-rule="evenodd" class="iwelwt5qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-layout"} {...others} />);
}

export default Component;
