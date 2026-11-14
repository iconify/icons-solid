import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5giqqahd.css';
import '../../css/q/q833gpbcf.css';
import '../../css/d/d4-ke6bbh.css';
import '../../css/n/n_i9t3l9h.css';
import '../../css/c/c71o25bkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i5giqqahd"/><circle class="q833gpbcf"/><circle class="d4-ke6bbh"/><path class="n_i9t3l9h"/><path class="c71o25bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:car-electric"} {...others} />);
}

export default Component;
