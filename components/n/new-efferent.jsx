import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ge01ofbis.css';
import '../../css/g/gq20dsh4f.css';
import '../../css/y/ywl9iuron.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ge01ofbis"/><path class="gq20dsh4f"/><path class="ywl9iuron"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:new-efferent"} {...others} />);
}

export default Component;
