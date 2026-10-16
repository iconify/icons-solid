import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe1o59byh.css';
import '../../css/a/anawxhbys.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pe1o59byh"/><path class="anawxhbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-cone-48-bold"} {...others} />);
}

export default Component;
