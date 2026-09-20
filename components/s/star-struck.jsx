import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/s/s2dm0dd0i.css';
import '../../css/e/e63b1f_jd.css';
import '../../css/o/oj4v3_b9i.css';
import '../../css/l/lb80qlbob.css';
import '../../css/k/ky3t62bns.css';
import '../../css/v/vs75iw7pq.css';
import '../../css/g/g7iwtbc9y.css';
import '../../css/q/qtfp1d0ur.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="s2dm0dd0i"/><path class="e63b1f_jd"/><path class="oj4v3_b9i"/><g class="lb80qlbob"><path class="ky3t62bns"/><path class="vs75iw7pq"/><path class="g7iwtbc9y"/><path class="qtfp1d0ur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star-struck"} {...others} />);
}

export default Component;
