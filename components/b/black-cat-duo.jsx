import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lbnt75byn.css';
import '../../css/w/w27peibbj.css';
import '../../css/s/scgb-sjtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lbnt75byn"/><path class="w27peibbj wm-a"/><path class="scgb-sjtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:black-cat-duo"} {...others} />);
}

export default Component;
