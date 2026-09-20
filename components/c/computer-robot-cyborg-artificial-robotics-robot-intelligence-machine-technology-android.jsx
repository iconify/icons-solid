import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ph1w6kzrw.css';
import '../../css/o/okl7rfikj.css';
import '../../css/r/rxs2pepgs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ph1w6kzrw"/><circle class="okl7rfikj"/><circle class="rxs2pepgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-robot-cyborg-artificial-robotics-robot-intelligence-machine-technology-android"} {...others} />);
}

export default Component;
