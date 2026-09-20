import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uch-0mb5e.css';
import '../../css/q/ql5fq_amm.css';
import '../../css/q/qkazn7bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uch-0mb5e"/><path class="ql5fq_amm"/><path class="qkazn7bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-off-two-tone"} {...others} />);
}

export default Component;
