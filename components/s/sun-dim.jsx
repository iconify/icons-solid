import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4lkmexhh.css';
import '../../css/t/te0onvfov.css';
import '../../css/h/h3g5nxbvr.css';
import '../../css/f/fq1x5qbez.css';
import '../../css/b/bcurydn8g.css';
import '../../css/o/oznmb-bpq.css';
import '../../css/d/dldkvrbek.css';
import '../../css/z/zssstjbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4lkmexhh wm-shadow"/><path class="te0onvfov wm-k"/><path class="h3g5nxbvr wm-k"/><path class="fq1x5qbez wm-k"/><path class="bcurydn8g wm-k"/><path class="oznmb-bpq wm-k"/><path class="dldkvrbek wm-shine"/><path class="wm-a zssstjbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sun-dim"} {...others} />);
}

export default Component;
