import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/m_n22nbel.css';
import '../../css/a/abtghqbcf.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="m_n22nbel"/><path class="abtghqbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:play-button"} {...others} />);
}

export default Component;
