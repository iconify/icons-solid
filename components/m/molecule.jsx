import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l606hpblz.css';
import '../../css/a/a94083zmd.css';
import '../../css/s/s7qlots-e.css';
import '../../css/c/c64rx-oed.css';
import '../../css/q/qf4kd3bgi.css';
import '../../css/t/tr57f1brb.css';
import '../../css/h/hubiu8bwb.css';
import '../../css/g/gv68en5bf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="l606hpblz"/><path class="a94083zmd"/><circle class="s7qlots-e"/><path class="c64rx-oed"/><circle class="qf4kd3bgi"/><path class="tr57f1brb"/><circle class="hubiu8bwb"/><circle class="gv68en5bf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:molecule"} {...others} />);
}

export default Component;
