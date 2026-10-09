import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzlanurfx.css';
import '../../css/x/x5igzyszp.css';
import '../../css/z/zwpgspbzr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dzlanurfx"/><path class="x5igzyszp"/><path class="zwpgspbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-recovery-48-bold"} {...others} />);
}

export default Component;
