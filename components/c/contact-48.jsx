import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbxahob9m.css';
import '../../css/d/d7h047u_p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbxahob9m"/><path class="d7h047u_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contact-48"} {...others} />);
}

export default Component;
