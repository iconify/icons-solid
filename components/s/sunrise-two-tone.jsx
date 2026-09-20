import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/te6y77d1p.css';
import '../../css/l/lm6_mj63l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="te6y77d1p"/><path class="lm6_mj63l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sunrise-two-tone"} {...others} />);
}

export default Component;
