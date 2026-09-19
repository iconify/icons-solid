import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol1qgland.css';
import '../../css/l/lu-nqrbmy.css';
import '../../css/a/ayje7ibqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ol1qgland"><path class="lu-nqrbmy"/><path class="ayje7ibqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:intermediate-mode"} {...others} />);
}

export default Component;
