import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l0s25nbas.css';
import '../../css/y/ym83_p68n.css';
import '../../css/i/i8a4t027f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="l0s25nbas"/><path class="ym83_p68n"/><path class="i8a4t027f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cake-slice"} {...others} />);
}

export default Component;
