import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eawujccwp.css';
import '../../css/h/hpc2axbfb.css';
import '../../css/u/u2n39iylw.css';
import '../../css/c/cvg2yryrv.css';
import '../../css/b/b4awjxb-h.css';
import '../../css/b/b3kw4gbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eawujccwp"/><path class="hpc2axbfb"/><path class="u2n39iylw"/><path class="cvg2yryrv"/><path class="b4awjxb-h"/><path class="b3kw4gbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brain"} {...others} />);
}

export default Component;
