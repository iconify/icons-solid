import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k50641bso.css';
import '../../css/o/ogqr6mqqi.css';
import '../../css/b/b5a6r1b6z.css';
import '../../css/k/kib4n-bfq.css';
import '../../css/b/bwlnkpx5x.css';
import '../../css/n/ngfpl3m9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k50641bso"/><path class="ogqr6mqqi"/><path class="b5a6r1b6z"/><circle class="kib4n-bfq"/><circle class="bwlnkpx5x"/><path class="ngfpl3m9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:oldpersonalcomputer"} {...others} />);
}

export default Component;
