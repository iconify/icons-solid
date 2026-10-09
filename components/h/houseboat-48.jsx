import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmhs3ccli.css';
import '../../css/c/cy8_11dig.css';
import '../../css/o/o4-ileblc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmhs3ccli"/><path class="cy8_11dig"/><path class="o4-ileblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:houseboat-48"} {...others} />);
}

export default Component;
