import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_t047y1o.css';
import '../../css/n/nkr4jmcos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o_t047y1o"/><path class="nkr4jmcos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-cancel"} {...others} />);
}

export default Component;
