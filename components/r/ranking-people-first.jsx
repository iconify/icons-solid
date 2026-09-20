import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcl59ndul.css';
import '../../css/o/ors4yccrw.css';
import '../../css/y/y4zb_ccqc.css';
import '../../css/o/o1gruq0vi.css';
import '../../css/e/e4h8rrb9j.css';
import '../../css/a/avxv560yq.css';
import '../../css/q/qochcrb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zcl59ndul"/><path class="ors4yccrw"/><path class="y4zb_ccqc"/><path class="o1gruq0vi"/><path class="e4h8rrb9j"/><path class="avxv560yq"/><path class="qochcrb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ranking-people-first"} {...others} />);
}

export default Component;
