import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zvr7xsb7x.css';
import '../../css/c/cr62cjb1u.css';
import '../../css/l/llieu-bxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zvr7xsb7x"/><path class="cr62cjb1u"/><path class="llieu-bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:feelgood"} {...others} />);
}

export default Component;
