import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ralzz_bza.css';
import '../../css/o/oi8iyebza.css';
import '../../css/p/p9-j6ywuc.css';
import '../../css/f/fkeuwj0bk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ralzz_bza"/><path clip-rule="evenodd" class="oi8iyebza"/><path class="p9-j6ywuc"/><path class="fkeuwj0bk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:building-1"} {...others} />);
}

export default Component;
