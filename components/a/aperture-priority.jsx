import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g7c0sab9y.css';
import '../../css/n/n7whz5z0y.css';
import '../../css/e/eojrxsbwi.css';
import '../../css/p/pw7p7hvoa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="g7c0sab9y"/><path class="n7whz5z0y"/><path class="eojrxsbwi"/><path class="pw7p7hvoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:aperture-priority"} {...others} />);
}

export default Component;
