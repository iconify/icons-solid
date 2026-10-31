import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-31ttcxg.css';
import '../../css/r/rxkg3ygff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="rxkg3ygff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paper-plane-duocolor-round"} {...others} />);
}

export default Component;
