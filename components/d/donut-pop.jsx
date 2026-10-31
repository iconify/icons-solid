import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/r/ruk43sbpo.css';
import '../../css/w/w7f5-dbuk.css';
import '../../css/l/lh-t3ybnt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="ruk43sbpo"/><path class="w7f5-dbuk"/><path class="lh-t3ybnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:donut-pop"} {...others} />);
}

export default Component;
