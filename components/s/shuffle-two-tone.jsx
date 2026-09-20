import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqn-ez1bm.css';
import '../../css/h/h_i7uu37s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oqn-ez1bm"/><path class="h_i7uu37s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shuffle-two-tone"} {...others} />);
}

export default Component;
