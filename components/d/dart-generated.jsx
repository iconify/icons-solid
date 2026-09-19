import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvcq89ble.css';
import '../../css/i/iip0rz5nl.css';
import '../../css/o/oqq-bg_3g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cvcq89ble"><path class="iip0rz5nl"/><path class="oqq-bg_3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:dart-generated"} {...others} />);
}

export default Component;
