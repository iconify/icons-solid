import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sx2q93wsp.css';
import '../../css/q/q30h5qb3d.css';
import '../../css/m/mivn5-bye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sx2q93wsp"/><path class="q30h5qb3d"/><path class="mivn5-bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:phone-pen-2"} {...others} />);
}

export default Component;
