import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/oq9c_3bzv.css';
import '../../css/t/t_ro0pywx.css';
import '../../css/k/k6yq07j7l.css';
import '../../css/b/bfepucbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="oq9c_3bzv"/><path class="t_ro0pywx"/></g><path class="k6yq07j7l"/><path class="bfepucbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
