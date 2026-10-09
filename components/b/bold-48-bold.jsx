import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwduy1bns.css';
import '../../css/k/kuz80_b7w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mwduy1bns"/><path class="kuz80_b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bold-48-bold"} {...others} />);
}

export default Component;
