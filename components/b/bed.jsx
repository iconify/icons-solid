import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rd5nmc_xa.css';
import '../../css/a/a32rvzbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rd5nmc_xa"/><path class="a32rvzbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bed"} {...others} />);
}

export default Component;
