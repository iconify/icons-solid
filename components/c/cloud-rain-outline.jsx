import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v805mjb0m.css';
import '../../css/r/rsyxy_bjw.css';
import '../../css/n/n_7s633jr.css';
import '../../css/o/ozyqj7xnu.css';
import '../../css/l/l8qjdd5rb.css';
import '../../css/a/at66jg_ss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v805mjb0m"/><path class="rsyxy_bjw"/><path class="n_7s633jr"/><path class="ozyqj7xnu"/><path class="l8qjdd5rb"/><path class="at66jg_ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-rain-outline"} {...others} />);
}

export default Component;
