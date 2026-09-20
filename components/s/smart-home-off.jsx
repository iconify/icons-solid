import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jnoc-ab0b.css';
import '../../css/b/b6omybbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jnoc-ab0b"/><path class="b6omybbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:smart-home-off"} {...others} />);
}

export default Component;
