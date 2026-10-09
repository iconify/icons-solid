import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z79_i2hkx.css';
import '../../css/h/hu2zm7ich.css';
import '../../css/z/zlii3abwq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z79_i2hkx"/><path class="hu2zm7ich"/><path class="zlii3abwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cell-20"} {...others} />);
}

export default Component;
