import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x-g9jw6ft.css';
import '../../css/g/gi5qaabdi.css';
import '../../css/w/w7kf1r9jw.css';
import '../../css/f/fve0_hbpg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="x-g9jw6ft"/><rect class="gi5qaabdi"/><path class="w7kf1r9jw"/><path class="fve0_hbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:basketball-clothes"} {...others} />);
}

export default Component;
