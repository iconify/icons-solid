import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/l85b475qg.css';
import '../../css/a/apqxg2b3t.css';
import '../../css/k/k-nql8bba.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="l85b475qg"/><path class="apqxg2b3t"/><path clip-rule="evenodd" class="k-nql8bba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gherkin-light"} {...others} />);
}

export default Component;
