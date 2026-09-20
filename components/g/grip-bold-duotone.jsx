import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m55j1sm8n.css';
import '../../css/e/ev5fq_ghg.css';
import '../../css/t/tcgrnfb9f.css';
import '../../css/g/g356x9b1c.css';
import '../../css/s/sw3i3-b9l.css';
import '../../css/i/iecinqh6w.css';
import '../../css/n/n8yggc4ou.css';
import '../../css/j/jwc3qbqfe.css';
import '../../css/o/orqhhebvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m55j1sm8n"/><path class="ev5fq_ghg"/><path class="tcgrnfb9f"/><path class="g356x9b1c"/><path class="sw3i3-b9l"/><path class="iecinqh6w"/><path class="n8yggc4ou"/><path class="jwc3qbqfe"/><path class="orqhhebvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-bold-duotone"} {...others} />);
}

export default Component;
