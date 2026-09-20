import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckzrmrrbw.css';
import '../../css/b/bwqzynb8x.css';
import '../../css/o/o-c193vbm.css';
import '../../css/t/tt0e0hfse.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/r/r-7udo0-z.css';
import '../../css/h/h4fu1cbpq.css';
import '../../css/r/rj0bunemo.css';
import '../../css/k/kbdsnzfko.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ckzrmrrbw"/><path class="bwqzynb8x"/><circle class="o-c193vbm"/><circle class="tt0e0hfse"/><g class="rpvb-o6bq"><path class="r-7udo0-z"/><circle class="h4fu1cbpq"/><circle class="rj0bunemo"/><path class="kbdsnzfko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:manual-wheelchair"} {...others} />);
}

export default Component;
