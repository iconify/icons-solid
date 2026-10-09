import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f76ef2b7k.css';
import '../../css/s/s0byieb2a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f76ef2b7k"/><path class="s0byieb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hvdc-converter-48"} {...others} />);
}

export default Component;
