import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u74hcr8lk.css';
import '../../css/r/r_o7zxbjo.css';
import '../../css/x/x0ij0us_v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u74hcr8lk"/><path class="r_o7zxbjo"/><path class="x0ij0us_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-radio-active-2-warning-radioactive-radiation-emergency-danger-safety"} {...others} />);
}

export default Component;
