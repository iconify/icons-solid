import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a75zxoc1y.css';
import '../../css/k/ke9xms0bs.css';
import '../../css/o/ozu0o6bgp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="a75zxoc1y"/><path class="ke9xms0bs"/><path class="ozu0o6bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:wave"} {...others} />);
}

export default Component;
