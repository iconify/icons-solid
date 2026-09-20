import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sbqf8lmdc.css';
import '../../css/c/cwak6ub6e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="sbqf8lmdc"/><path class="cwak6ub6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:video-subtitles"} {...others} />);
}

export default Component;
