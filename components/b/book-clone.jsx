import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8uitjomx.css';
import '../../css/z/zl12wg8_m.css';
import '../../css/c/cytfombss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c8uitjomx"/><path class="zl12wg8_m"/><path class="cytfombss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:book-clone"} {...others} />);
}

export default Component;
