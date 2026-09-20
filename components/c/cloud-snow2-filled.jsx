import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtxoq_7g.css';
import '../../css/r/rsuz-abdo.css';
import '../../css/x/xxezz29qb.css';
import '../../css/m/md6x1cc6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pgtxoq_7g"/><path class="rsuz-abdo"/><path class="xxezz29qb"/><path class="md6x1cc6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-snow2-filled"} {...others} />);
}

export default Component;
