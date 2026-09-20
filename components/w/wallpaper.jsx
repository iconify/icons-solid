import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzyc0it6n.css';
import '../../css/p/pu70qibba.css';
import '../../css/j/j_7ku_4mw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uzyc0it6n"/><path class="pu70qibba"/><path class="j_7ku_4mw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wallpaper"} {...others} />);
}

export default Component;
