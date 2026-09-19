import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvsloo3bk.css';
import '../../css/l/l_xkm4osf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="rvsloo3bk"/><path class="l_xkm4osf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:speedometer"} {...others} />);
}

export default Component;
