import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z33pyccyt.css';
import '../../css/l/lv57wviqe.css';
import '../../css/a/acc7p2d0m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z33pyccyt"/><path class="lv57wviqe"/><path class="acc7p2d0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earth-layers-48"} {...others} />);
}

export default Component;
