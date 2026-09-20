import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az0o31b0s.css';
import '../../css/d/dqxlzcbzl.css';
import '../../css/p/pcpc27ofz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="az0o31b0s"/><path class="dqxlzcbzl"/><circle transform="rotate(90 10 9)" class="pcpc27ofz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:money-hand"} {...others} />);
}

export default Component;
