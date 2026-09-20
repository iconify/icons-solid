import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/edkp1uj2o.css';
import '../../css/t/tqsz8rfna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="edkp1uj2o"/><path class="tqsz8rfna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hemisphere-plus"} {...others} />);
}

export default Component;
