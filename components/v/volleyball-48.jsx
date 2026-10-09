import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/b/b2x5ugbju.css';
import '../../css/i/iz5_bcb-i.css';
import '../../css/h/h-5l_mbfx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="b2x5ugbju"/><path class="iz5_bcb-i"/><path class="h-5l_mbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volleyball-48"} {...others} />);
}

export default Component;
