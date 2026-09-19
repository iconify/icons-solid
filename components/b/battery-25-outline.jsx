import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg96irb-q.css';
import '../../css/k/k2j2evb2o.css';
import '../../css/a/a2kumftht.css';
import '../../css/r/rbvbd_b7g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rg96irb-q"/><path clip-rule="evenodd" class="k2j2evb2o"/><path class="a2kumftht"/><path clip-rule="evenodd" class="rbvbd_b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-25-outline"} {...others} />);
}

export default Component;
