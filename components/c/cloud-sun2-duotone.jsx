import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4z8_ccga.css';
import '../../css/v/vpqq9pjjw.css';
import '../../css/b/bwgid6btj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o4z8_ccga"/><path clip-rule="evenodd" class="vpqq9pjjw"/><path class="bwgid6btj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-sun2-duotone"} {...others} />);
}

export default Component;
