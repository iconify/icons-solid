import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_9kmbbto.css';
import '../../css/g/gzouemggr.css';
import '../../css/y/yao307bfc.css';
import '../../css/y/y34jelf6t.css';
import '../../css/s/seaqqz92q.css';
import '../../css/o/oq32idz_m.css';
import '../../css/f/fxllg5beg.css';
import '../../css/e/epndwko3r.css';
import '../../css/o/ov8q0cblh.css';
import '../../css/w/we82wsbqu.css';
import '../../css/n/n230er5jo.css';
import '../../css/r/rh6vodkst.css';
import '../../css/w/wu0fsubqt.css';
import '../../css/n/nmbfqeizj.css';
import '../../css/e/e-3nrnc3x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g_9kmbbto"/><path class="gzouemggr"/><path class="yao307bfc"/><path class="y34jelf6t"/><path class="seaqqz92q"/><path class="oq32idz_m"/><path class="fxllg5beg"/><path class="epndwko3r"/><path class="ov8q0cblh"/><path class="we82wsbqu"/><path class="n230er5jo"/><path class="rh6vodkst"/><path class="wu0fsubqt"/><path class="nmbfqeizj"/><path class="e-3nrnc3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:frog-face"} {...others} />);
}

export default Component;
