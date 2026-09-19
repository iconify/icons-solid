import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fr8naq4ou.css';
import '../../css/e/egdsjpopv.css';
import '../../css/m/m5znx-b1e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fr8naq4ou"/><path class="egdsjpopv"/><path class="m5znx-b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:coffee-machine"} {...others} />);
}

export default Component;
