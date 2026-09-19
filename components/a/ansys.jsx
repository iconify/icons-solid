import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u49fm9evw.css';
import '../../css/f/fzn8913pw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u49fm9evw"/><path class="fzn8913pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ansys"} {...others} />);
}

export default Component;
