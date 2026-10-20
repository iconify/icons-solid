import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djnf_2eav.css';
import '../../css/g/gxlbmp61p.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="djnf_2eav"/><path class="gxlbmp61p"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-check-48-bold"} {...others} />);
}

export default Component;
