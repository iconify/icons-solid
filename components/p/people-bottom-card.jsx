import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8x38jbfa.css';
import '../../css/s/sce5bfb4n.css';
import '../../css/c/czqpd_v7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o8x38jbfa"/><circle class="sce5bfb4n"/><path class="czqpd_v7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-bottom-card"} {...others} />);
}

export default Component;
