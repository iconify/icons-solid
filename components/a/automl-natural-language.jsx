import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6mstu8gp.css';
import '../../css/h/hplljm8we.css';
import '../../css/v/v96in2bls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s6mstu8gp"><path class="hplljm8we"/><path class="v96in2bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:automl-natural-language"} {...others} />);
}

export default Component;
