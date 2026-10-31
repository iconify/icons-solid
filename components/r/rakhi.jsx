import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exwrc0-ch.css';
import '../../css/e/e2u84fb1z.css';
import '../../css/a/a3jgxab-u.css';
import '../../css/b/b23ckcb7s.css';
import '../../css/g/gtjxjyhsp.css';
import '../../css/a/au55k16wd.css';
import '../../css/z/zbd33kb1k.css';
import '../../css/n/nj5g1cbqp.css';
import '../../css/k/kdq1v7bwq.css';
import '../../css/o/o-h12xbsq.css';
import '../../css/h/hwli5tbbb.css';
import '../../css/t/trclaohgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="exwrc0-ch"><path class="e2u84fb1z wm-shadow"/><path class="a3jgxab-u wm-shadow"/><circle class="b23ckcb7s wm-shadow"/><circle class="gtjxjyhsp wm-shadow"/><path class="au55k16wd wm-shadow"/><circle class="wm-shadow zbd33kb1k"/><path class="nj5g1cbqp wm-k"/><path class="kdq1v7bwq wm-k"/><path class="o-h12xbsq wm-k"/><circle class="hwli5tbbb wm-k"/><circle class="trclaohgg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rakhi"} {...others} />);
}

export default Component;
