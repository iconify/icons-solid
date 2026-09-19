import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/alx19_r_t.css';
import '../../css/s/sewd1ccmo.css';
import '../../css/f/f3thebb2v.css';
import '../../css/l/lz2098e2z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="alx19_r_t"/><path class="sewd1ccmo"/><path class="f3thebb2v"/><path class="lz2098e2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:watermelon"} {...others} />);
}

export default Component;
