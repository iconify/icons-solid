import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eznk3bbmj.css';
import '../../css/a/awbga00xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eznk3bbmj"/><path class="awbga00xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:trailer"} {...others} />);
}

export default Component;
