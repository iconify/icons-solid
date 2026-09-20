import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvfa4nbjp.css';
import '../../css/u/usggndbfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vrpmv5bjw.css';
import '../../css/h/hgqe7ndyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hvfa4nbjp"/><path class="usggndbfr"/><g class="mc2zb0bvp"><path class="vrpmv5bjw"/><path class="hgqe7ndyk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lamp-bold-duotone"} {...others} />);
}

export default Component;
