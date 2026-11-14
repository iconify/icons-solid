import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brgk90bxs.css';
import '../../css/v/vuh0gsb8g.css';
import '../../css/z/zdpgtwb8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="brgk90bxs"/><path class="vuh0gsb8g"/><path class="zdpgtwb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minecraft-creeper-dark"} {...others} />);
}

export default Component;
