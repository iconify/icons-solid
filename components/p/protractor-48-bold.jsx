import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6q-m_77w.css';
import '../../css/l/l__xd22cd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q6q-m_77w"/><path class="l__xd22cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:protractor-48-bold"} {...others} />);
}

export default Component;
