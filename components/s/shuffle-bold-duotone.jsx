import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/h/hqy9cpbje.css';
import '../../css/h/h5crjsyym.css';
import '../../css/g/gf-u3tcmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="hqy9cpbje"/><path class="h5crjsyym"/><path class="gf-u3tcmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shuffle-bold-duotone"} {...others} />);
}

export default Component;
