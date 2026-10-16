import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um_1f_zem.css';
import '../../css/t/txa3dwb5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="um_1f_zem"/><path class="txa3dwb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extension-lead-48"} {...others} />);
}

export default Component;
