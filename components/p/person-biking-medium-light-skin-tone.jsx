import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-pq53bnn.css';
import '../../css/c/cdcw17j_s.css';
import '../../css/n/nbc6qjezz.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/w/wtyn-hhqn.css';
import '../../css/q/q1fy91bdm.css';
import '../../css/m/mvtlnqb9a.css';
import '../../css/m/mvxt65bwh.css';
import '../../css/s/sq5eprz8d.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="l-pq53bnn"><circle class="cdcw17j_s"/><path class="nbc6qjezz"/></g><g class="x8poo_bjf"><circle class="cdcw17j_s"/><path class="wtyn-hhqn"/><circle class="q1fy91bdm"/><circle class="mvtlnqb9a"/><path class="mvxt65bwh"/><path class="sq5eprz8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-biking-medium-light-skin-tone"} {...others} />);
}

export default Component;
