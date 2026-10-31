import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnof2usyk.css';
import '../../css/y/y9syc8btb.css';
import '../../css/j/jqee0iips.css';
import '../../css/c/cgdj23eok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gnof2usyk"/><path class="y9syc8btb"/><path class="jqee0iips"/><path class="cgdj23eok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:enter-key-pop"} {...others} />);
}

export default Component;
