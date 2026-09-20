import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mo11kpbcu.css';
import '../../css/c/chnzr1b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="mo11kpbcu"/><path class="chnzr1b_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:paper-binder"} {...others} />);
}

export default Component;
