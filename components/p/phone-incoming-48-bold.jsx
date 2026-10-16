import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5idgqqvy.css';
import '../../css/l/lyz0avnlk.css';
import '../../css/m/m_a345b5y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b5idgqqvy"/><path class="lyz0avnlk"/><path class="m_a345b5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-incoming-48-bold"} {...others} />);
}

export default Component;
