import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqugpjbox.css';
import '../../css/o/ohddqdbak.css';
import '../../css/k/kfydo0bxj.css';
import '../../css/c/cvhp0drkw.css';
import '../../css/p/pdq_5pb9s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mqugpjbox"/><g class="ohddqdbak"><path class="kfydo0bxj"/><path class="cvhp0drkw"/></g><path class="pdq_5pb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:data-encryption"} {...others} />);
}

export default Component;
