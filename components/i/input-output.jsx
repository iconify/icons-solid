import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o70ahabzi.css';
import '../../css/l/ljtb-fksr.css';
import '../../css/k/kdmk5zbay.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="o70ahabzi"/><path class="ljtb-fksr"/><path class="kdmk5zbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:input-output"} {...others} />);
}

export default Component;
