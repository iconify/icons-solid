import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m9nmhnevo.css';
import '../../css/e/en1312omp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m9nmhnevo"/><path clip-rule="evenodd" class="en1312omp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:graphic-design-two"} {...others} />);
}

export default Component;
