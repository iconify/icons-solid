import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k12za_xqk.css';
import '../../css/r/r6wv3sbay.css';
import '../../css/b/b9c3bg9mh.css';
import '../../css/p/p0lznmxvv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k12za_xqk"/><path class="r6wv3sbay"/><path class="b9c3bg9mh"/><path class="p0lznmxvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-west-duo"} {...others} />);
}

export default Component;
