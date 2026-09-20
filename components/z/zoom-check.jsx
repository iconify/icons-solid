import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7j3l5bxg.css';
import '../../css/e/em7_hzahq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o7j3l5bxg"/><path class="em7_hzahq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zoom-check"} {...others} />);
}

export default Component;
