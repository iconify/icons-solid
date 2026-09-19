import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayfd0nbyv.css';
import '../../css/c/chwk06erx.css';
import '../../css/h/h0eeg0beg.css';
import '../../css/b/b1gjzcduw.css';
import '../../css/f/ft-lizwco.css';
import '../../css/c/cy6unzb5e.css';
import '../../css/w/wf11q2s4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ayfd0nbyv"/><path class="chwk06erx"/><path class="h0eeg0beg"/><path class="b1gjzcduw"/><path class="ft-lizwco"/><path class="cy6unzb5e"/><path class="wf11q2s4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:compute-engine"} {...others} />);
}

export default Component;
