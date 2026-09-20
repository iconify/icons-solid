import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e5jfzabtj.css';
import '../../css/p/p0g2tac2m.css';
import '../../css/b/bsf2wtbwe.css';
import '../../css/z/z5o8yvb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e5jfzabtj"/><path class="p0g2tac2m"/><path class="bsf2wtbwe"/><path class="z5o8yvb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-wind-turbine"} {...others} />);
}

export default Component;
