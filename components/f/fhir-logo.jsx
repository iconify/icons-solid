import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q59m2-7jc.css';
import '../../css/o/o9k83k9ug.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="q59m2-7jc"/><path class="o9k83k9ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fhir-logo"} {...others} />);
}

export default Component;
