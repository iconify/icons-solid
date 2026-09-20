import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c1kginpzj.css';
import '../../css/r/r66509b6r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="c1kginpzj"/><path class="r66509b6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ear-hearing"} {...others} />);
}

export default Component;
