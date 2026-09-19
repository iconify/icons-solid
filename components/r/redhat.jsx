import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzfb64bla.css';
import '../../css/k/kbh20vd3x.css';
import '../../css/m/mexzrqjpi.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fzfb64bla"/><path class="kbh20vd3x"/><path class="mexzrqjpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:redhat"} {...others} />);
}

export default Component;
