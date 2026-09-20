import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cq0dx3b3w.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/k/k2j3rkbhc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cq0dx3b3w"/><path class="r2th9g7qg"/><path class="k2j3rkbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:smiley-angry"} {...others} />);
}

export default Component;
