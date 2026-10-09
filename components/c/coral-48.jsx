import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by92osboh.css';
import '../../css/b/bt7ducbtn.css';
import '../../css/o/ops1169qo.css';
import '../../css/e/ew-rlnbrf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="by92osboh"/><path class="bt7ducbtn"/><path class="ops1169qo"/><path class="ew-rlnbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coral-48"} {...others} />);
}

export default Component;
