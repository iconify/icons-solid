import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twb5ftgbd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szl-vpbku.css';
import '../../css/l/l3krqn9dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary twb5ftgbd"/><g class="dt0cm9dhy primary"><path class="szl-vpbku"/><path class="l3krqn9dm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-play-duo"} {...others} />);
}

export default Component;
