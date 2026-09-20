import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl82r-bam.css';
import '../../css/v/v9y5wi_ot.css';
import '../../css/q/q_ma8083f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kl82r-bam"/><path class="v9y5wi_ot"/><path class="q_ma8083f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:exclamation-alert-light"} {...others} />);
}

export default Component;
