import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_7m__7bi.css';
import '../../css/e/er5teobrz.css';
import '../../css/l/lmc5jxf9q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_7m__7bi"/><path class="er5teobrz"/><path class="lmc5jxf9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bot-20"} {...others} />);
}

export default Component;
