import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chp_nybzg.css';
import '../../css/z/ze1bd391g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="chp_nybzg"/><path class="ze1bd391g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:zsh"} {...others} />);
}

export default Component;
