import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz7l42nhx.css';
import '../../css/z/zwyhlrb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cz7l42nhx"/><path class="zwyhlrb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pinterest-duocolor-round"} {...others} />);
}

export default Component;
