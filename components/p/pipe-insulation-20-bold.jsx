import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlo4be-zl.css';
import '../../css/l/lswyakbtp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qlo4be-zl"/><path class="lswyakbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-insulation-20-bold"} {...others} />);
}

export default Component;
