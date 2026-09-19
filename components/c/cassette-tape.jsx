import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kashf7dvo.css';
import '../../css/g/gnfp7qbrp.css';
import '../../css/v/vlfpssodi.css';
import '../../css/z/z4p6v5jwg.css';
import '../../css/f/foe06fc_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kashf7dvo"/><path class="gnfp7qbrp"/><circle class="vlfpssodi"/><circle class="z4p6v5jwg"/><path class="foe06fc_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cassette-tape"} {...others} />);
}

export default Component;
