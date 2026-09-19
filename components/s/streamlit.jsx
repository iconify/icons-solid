import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_je-3caz.css';
import '../../css/j/jmyvgu6pl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x_je-3caz"/><path class="jmyvgu6pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:streamlit"} {...others} />);
}

export default Component;
