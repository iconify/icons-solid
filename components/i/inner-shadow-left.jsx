import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzbq1d81g.css';
import '../../css/t/tqspuel1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lzbq1d81g"/><path class="tqspuel1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-left"} {...others} />);
}

export default Component;
