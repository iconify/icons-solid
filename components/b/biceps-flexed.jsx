import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cg8ka286d.css';
import '../../css/y/ylgp65mpw.css';
import '../../css/s/sk_1bsbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cg8ka286d"/><path class="ylgp65mpw"/><path class="sk_1bsbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:biceps-flexed"} {...others} />);
}

export default Component;
