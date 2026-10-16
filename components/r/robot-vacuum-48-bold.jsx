import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moyoz5fkv.css';
import '../../css/b/bxl-xsb_s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="moyoz5fkv"/><path class="bxl-xsb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-vacuum-48-bold"} {...others} />);
}

export default Component;
