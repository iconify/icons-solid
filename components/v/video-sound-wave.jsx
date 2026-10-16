import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxjzlsahc.css';
import '../../css/t/twd5vebap.css';
import '../../css/c/cn8zeebmg.css';
import '../../css/g/gbh5adcqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xxjzlsahc"/><path clip-rule="evenodd" class="twd5vebap"/><path class="cn8zeebmg"/><path class="gbh5adcqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-sound-wave"} {...others} />);
}

export default Component;
