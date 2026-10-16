import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip5ukpbia.css';
import '../../css/k/ka079q8wr.css';
import '../../css/o/o0gto1_-j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ip5ukpbia"/><path class="ka079q8wr"/><path class="o0gto1_-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-burner-48"} {...others} />);
}

export default Component;
