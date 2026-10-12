import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwwz45hpf.css';
import '../../css/v/v_rtg2u6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwwz45hpf"/><path class="v_rtg2u6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-bottle-48"} {...others} />);
}

export default Component;
