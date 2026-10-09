import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l94bcicug.css';
import '../../css/b/bjyphubzh.css';
import '../../css/f/ffcx5ccbi.css';
import '../../css/f/ffv-oibsh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l94bcicug"/><path class="bjyphubzh"/><path class="ffcx5ccbi"/><path class="ffv-oibsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-20"} {...others} />);
}

export default Component;
