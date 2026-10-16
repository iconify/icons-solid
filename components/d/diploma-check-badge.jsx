import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix1-3bpbm.css';
import '../../css/x/x-x2yh7ca.css';
import '../../css/j/jplvnrbiz.css';
import '../../css/v/v4j9fdcfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ix1-3bpbm"/><path class="x-x2yh7ca"/><path class="jplvnrbiz"/><path class="v4j9fdcfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:diploma-check-badge"} {...others} />);
}

export default Component;
