import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/er0c10lxa.css';
import '../../css/a/awmmf-bbh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="er0c10lxa"/><path class="awmmf-bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-alpha-down-duo"} {...others} />);
}

export default Component;
