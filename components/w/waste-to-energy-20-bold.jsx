import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxu_906s.css';
import '../../css/f/f9aktpbth.css';
import '../../css/p/p8fzstjth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vbxu_906s"/><path class="f9aktpbth"/><path class="p8fzstjth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waste-to-energy-20-bold"} {...others} />);
}

export default Component;
