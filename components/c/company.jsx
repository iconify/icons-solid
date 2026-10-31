import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzt-q2b7o.css';
import '../../css/i/ibmoakd6a.css';
import '../../css/t/tuvzb2bfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qzt-q2b7o"/><path class="ibmoakd6a"/><path class="tuvzb2bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:company"} {...others} />);
}

export default Component;
