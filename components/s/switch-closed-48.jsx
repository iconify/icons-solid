import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n22xqs0ko.css';
import '../../css/o/obkwv4bpm.css';
import '../../css/f/ffq6x-bwo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n22xqs0ko"/><path class="obkwv4bpm"/><path class="ffq6x-bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-closed-48"} {...others} />);
}

export default Component;
