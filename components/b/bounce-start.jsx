import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rika0vbol.css';
import '../../css/m/mrc64caws.css';
import '../../css/g/gbvokvbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="matrix(-1 0 0 1 8.08 3.73)" class="rika0vbol"/><path class="mrc64caws"/><circle transform="matrix(-1 0 0 1 8.08 3.73)" class="gbvokvbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bounce-start"} {...others} />);
}

export default Component;
