import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa_132r-y.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/t/tiqwyoept.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qa_132r-y"/><path class="ihmii9b0s"/><path class="tiqwyoept"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:containment-dome-48-bold"} {...others} />);
}

export default Component;
