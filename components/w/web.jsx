import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/r/r0_y5-b5i.css';
import '../../css/h/hgxqnbbag.css';
import '../../css/n/ny75v-k7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="r0_y5-b5i"/><path class="hgxqnbbag"/><path class="ny75v-k7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:web"} {...others} />);
}

export default Component;
