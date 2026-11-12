import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ago7mephz.css';
import '../../css/j/jncixsbcu.css';
import '../../css/a/arqyujb0i.css';
import '../../css/d/db2y1nh7u.css';
import '../../css/n/nrn_hbp3r.css';
import '../../css/k/kjrx-mbzr.css';
import '../../css/g/gmefe4qis.css';
import '../../css/o/ocecz_5bc.css';
import '../../css/l/lys0d0xfh.css';
import '../../css/b/b2jcn8bgk.css';
import '../../css/t/ty1zufb1y.css';
import '../../css/i/i6xt_-k3d.css';
import '../../css/j/j8ukgvvgu.css';
import '../../css/u/u6qllrb7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ago7mephz"/><path class="jncixsbcu"/><path class="arqyujb0i"/><path class="db2y1nh7u"/><path class="nrn_hbp3r"/><path class="kjrx-mbzr"/><path class="gmefe4qis"/><path class="ocecz_5bc"/><path class="lys0d0xfh"/><path class="b2jcn8bgk"/><path class="ty1zufb1y"/><path class="i6xt_-k3d"/><path class="j8ukgvvgu"/><path class="u6qllrb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minecraft-detailed"} {...others} />);
}

export default Component;
