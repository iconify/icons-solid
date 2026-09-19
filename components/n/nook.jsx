import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkscqfo9m.css';
import '../../css/l/lrasntecx.css';
import '../../css/b/b3m_3poii.css';
import '../../css/o/oewulyb2s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rkscqfo9m"/><path class="lrasntecx"/><path class="b3m_3poii"/><path class="oewulyb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:nook"} {...others} />);
}

export default Component;
