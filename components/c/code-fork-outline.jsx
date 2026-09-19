import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjwj2pbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjwj2pbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:code-fork-outline"} {...others} />);
}

export default Component;
