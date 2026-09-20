import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/o/ozcrq9qrs.css';
import '../../css/v/v1yfvkklw.css';
import '../../css/f/fi9tsr7mr.css';
import '../../css/u/u1g6nhqyx.css';
import '../../css/j/jfum-1tld.css';
import '../../css/j/jnd8-9bgn.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGZ75Dc8qY"><path class="k5-vjlrin"/><path class="ozcrq9qrs"/><path class="v1yfvkklw"/><path clip-rule="evenodd" class="fi9tsr7mr"/><path class="u1g6nhqyx"/><path class="jfum-1tld"/><path class="jnd8-9bgn"/></mask></defs><circle mask="url(#SVGZ75Dc8qY)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:printer-circle-filled"} {...others} />);
}

export default Component;
