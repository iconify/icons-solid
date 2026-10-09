import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtw_wzb8t.css';
import '../../css/g/gseyqnbcp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qtw_wzb8t"/><path class="gseyqnbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whistle-20-bold"} {...others} />);
}

export default Component;
