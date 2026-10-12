import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iysnah-wi.css';
import '../../css/u/u3dxucb3r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iysnah-wi"/><path class="u3dxucb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:set-square-48-bold"} {...others} />);
}

export default Component;
