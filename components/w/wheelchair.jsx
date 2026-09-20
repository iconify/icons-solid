import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/an0f3mbmg.css';
import '../../css/f/fww4hccrk.css';
import '../../css/l/l1icp4d8i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="an0f3mbmg"/><path class="fww4hccrk"/><path class="l1icp4d8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:wheelchair"} {...others} />);
}

export default Component;
