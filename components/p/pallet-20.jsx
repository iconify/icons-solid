import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/job_fgb5d.css';
import '../../css/e/es4tnviht.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="job_fgb5d"/><path class="es4tnviht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pallet-20"} {...others} />);
}

export default Component;
