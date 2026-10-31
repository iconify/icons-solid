import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt6lvbbez.css';
import '../../css/b/b1uzuvsep.css';
import '../../css/o/o45pbelik.css';
import '../../css/h/hff2s2b0d.css';
import '../../css/l/lm17g6b6g.css';
import '../../css/f/fhpet33dp.css';
import '../../css/v/vr3fyubbh.css';
import '../../css/v/vd085qb2f.css';
import '../../css/w/wqnxbua-h.css';
import '../../css/b/bk9dtm4rj.css';
import '../../css/k/knweccbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kt6lvbbez wm-shadow"/><path class="b1uzuvsep"/><path class="o45pbelik"/><path class="hff2s2b0d"/><path class="lm17g6b6g"/><path class="fhpet33dp"/><path class="vr3fyubbh"/><path class="vd085qb2f"/><path class="wqnxbua-h"/><path class="bk9dtm4rj wm-shine"/><path class="knweccbes wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:heart"} {...others} />);
}

export default Component;
