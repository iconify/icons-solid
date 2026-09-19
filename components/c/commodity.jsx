import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m_76ovury.css';
import '../../css/m/m2gapsgxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="m_76ovury"/><path class="m2gapsgxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:commodity"} {...others} />);
}

export default Component;
