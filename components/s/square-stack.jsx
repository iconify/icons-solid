import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b82ju8mgy.css';
import '../../css/l/lm1qn4__m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b82ju8mgy"/><rect class="lm1qn4__m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-stack"} {...others} />);
}

export default Component;
