import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxy5wbcie.css';
import '../../css/c/clh0ambgx.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oxy5wbcie"/><path class="clh0ambgx"/><path class="wfx3nk7mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-48"} {...others} />);
}

export default Component;
