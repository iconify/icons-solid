import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/k/knpp2accw.css';
import '../../css/k/kis5lmh2k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="knpp2accw"/><path class="kis5lmh2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:globe-48"} {...others} />);
}

export default Component;
