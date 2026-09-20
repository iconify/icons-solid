import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qcx76zaxv.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/b/bgy1389lr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="qcx76zaxv"/><circle class="peiq2hfxm"/><circle class="bgy1389lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:more"} {...others} />);
}

export default Component;
