import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/izgbtw1nb.css';
import '../../css/j/jj2zkqn1f.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="izgbtw1nb"/><path class="jj2zkqn1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:chart-column-decrease"} {...others} />);
}

export default Component;
