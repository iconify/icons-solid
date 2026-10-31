import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfi_unbbz.css';
import '../../css/e/elilp-cfg.css';
import '../../css/a/amayjib1r.css';
import '../../css/k/kcbaaxicr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wfi_unbbz wm-k"/><path class="elilp-cfg wm-a"/><circle class="amayjib1r wm-a"/><path class="kcbaaxicr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cast-gloss"} {...others} />);
}

export default Component;
