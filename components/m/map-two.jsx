import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uzu-zgn4d.css';
import '../../css/y/y4761y4co.css';
import '../../css/r/r9sywpbmq.css';
import '../../css/h/hqqlb8bcv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="uzu-zgn4d"/><path class="y4761y4co"/><path class="r9sywpbmq"/><path class="hqqlb8bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:map-two"} {...others} />);
}

export default Component;
