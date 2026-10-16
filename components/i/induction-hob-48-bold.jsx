import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaet4wb5s.css';
import '../../css/k/kvlw_qbpp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iaet4wb5s"/><path class="kvlw_qbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:induction-hob-48-bold"} {...others} />);
}

export default Component;
