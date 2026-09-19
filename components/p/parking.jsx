import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/ghfgsj2ga.css';
import '../../css/k/k16gn-bll.css';
import '../../css/l/llr_2sbko.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ghfgsj2ga"/><path class="k16gn-bll"/><path class="llr_2sbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:parking"} {...others} />);
}

export default Component;
