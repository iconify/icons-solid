import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmmt3ebdz.css';
import '../../css/f/ftjyp7crf.css';
import '../../css/q/qeutyabff.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmmt3ebdz"/><path class="ftjyp7crf"/><path class="qeutyabff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gauge-48"} {...others} />);
}

export default Component;
