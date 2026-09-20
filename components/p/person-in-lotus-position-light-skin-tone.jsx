import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq1bfqbrr.css';
import '../../css/h/hz1zk_bsj.css';
import '../../css/a/awpu8mb-l.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/n/n5bhdb4ld.css';
import '../../css/m/mzz-ioa3t.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="hq1bfqbrr"><circle class="hz1zk_bsj"/><path class="awpu8mb-l"/></g><g class="x8poo_bjf"><circle class="hz1zk_bsj"/><path class="n5bhdb4ld"/><path class="mzz-ioa3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-in-lotus-position-light-skin-tone"} {...others} />);
}

export default Component;
