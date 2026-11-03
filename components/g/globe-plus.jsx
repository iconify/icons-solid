import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phlrzt8zj.css';
import '../../css/u/udchr2bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phlrzt8zj"/><path class="udchr2bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-plus"} {...others} />);
}

export default Component;
