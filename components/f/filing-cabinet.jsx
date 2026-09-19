import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp1ryobsr.css';
import '../../css/u/u_kq-l1-a.css';
import '../../css/r/roc87nu7p.css';
import '../../css/w/w27m-bc4p.css';
import '../../css/r/rx-xzbles.css';
import '../../css/i/i5oz8ci3g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp1ryobsr"/><path class="u_kq-l1-a"/><path class="roc87nu7p"/><path clip-rule="evenodd" class="w27m-bc4p"/><path class="rx-xzbles"/><path class="i5oz8ci3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:filing-cabinet"} {...others} />);
}

export default Component;
