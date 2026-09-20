import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_7ru2bie.css';
import '../../css/r/rqab73f1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q_7ru2bie"/><path class="rqab73f1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-top"} {...others} />);
}

export default Component;
