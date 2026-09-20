import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w97nzrxjq.css';
import '../../css/m/mdpauxp_f.css';
import '../../css/n/nmrzd6rrg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="w97nzrxjq"/><path class="mdpauxp_f"/><path class="nmrzd6rrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:creative-commons"} {...others} />);
}

export default Component;
