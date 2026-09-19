import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/w/w1s23mb7s.css';
import '../../css/m/mwa85c6im.css';
import '../../css/e/ex9ju6btd.css';
import '../../css/b/bc6kks3tc.css';
import '../../css/t/tj4aydbri.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="w1s23mb7s"/><path class="mwa85c6im"/><path class="ex9ju6btd"/><path class="bc6kks3tc"/><path class="tj4aydbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:shield"} {...others} />);
}

export default Component;
