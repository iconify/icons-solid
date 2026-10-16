import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqrpztbuq.css';
import '../../css/g/g5xhmle3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mqrpztbuq"/><path class="g5xhmle3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-uk-20"} {...others} />);
}

export default Component;
