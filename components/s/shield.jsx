import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fuasb1myr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jl35dlbam.css';
import '../../css/w/wkvf31xoe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fuasb1myr"/><g class="mc2zb0bvp"><circle class="jl35dlbam"/><path class="wkvf31xoe"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:shield"} {...others} />);
}

export default Component;
