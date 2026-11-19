import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/be2-xt8pu.css';
import '../../css/b/bvga37gwd.css';
import '../../css/c/cfzanbbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="be2-xt8pu"/><path class="bvga37gwd"/><path class="cfzanbbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:jacket"} {...others} />);
}

export default Component;
