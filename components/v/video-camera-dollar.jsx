import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzsd4cbnd.css';
import '../../css/e/ezcs54baq.css';
import '../../css/p/povdh7q-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qzsd4cbnd"/><path class="ezcs54baq"/><path class="povdh7q-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:video-camera-dollar"} {...others} />);
}

export default Component;
