import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/e/e069invtl.css';
import '../../css/f/fmckybbge.css';
import '../../css/t/tk-0h_bhj.css';
import '../../css/a/anzkmq82z.css';
import '../../css/f/fhj3xlbxu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="e069invtl"/><path class="fmckybbge"/><path class="tk-0h_bhj"/><path class="anzkmq82z"/><path class="fhj3xlbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:dynamodb-light"} {...others} />);
}

export default Component;
