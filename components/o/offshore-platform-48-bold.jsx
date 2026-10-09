import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghgrl9bnl.css';
import '../../css/q/qcs6rdphe.css';
import '../../css/x/xpp-7oufq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghgrl9bnl"/><path class="qcs6rdphe"/><path class="xpp-7oufq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-platform-48-bold"} {...others} />);
}

export default Component;
