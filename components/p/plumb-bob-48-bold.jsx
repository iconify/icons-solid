import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5rak2bbx.css';
import '../../css/i/iyuvrebaw.css';
import '../../css/c/cnvsi8cop.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m5rak2bbx"/><path class="iyuvrebaw"/><path class="cnvsi8cop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plumb-bob-48-bold"} {...others} />);
}

export default Component;
