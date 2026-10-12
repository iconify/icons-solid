import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk03ef82o.css';
import '../../css/u/uci_g5bup.css';
import '../../css/t/tzqe4nbsi.css';
import '../../css/u/uj88zs3pg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xk03ef82o"/><path class="uci_g5bup"/><path class="tzqe4nbsi"/><path class="uj88zs3pg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:squirrel-duotone"} {...others} />);
}

export default Component;
