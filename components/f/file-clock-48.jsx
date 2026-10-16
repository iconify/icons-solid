import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2myycbsp.css';
import '../../css/p/pu43vbcbj.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2myycbsp"/><path class="pu43vbcbj"/><path class="a-8czfekn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-clock-48"} {...others} />);
}

export default Component;
