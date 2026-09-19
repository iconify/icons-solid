import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/x/xamblhbag.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path transform="matrix(-.4104 0 0 .41613 16.655 7.41)" class="xamblhbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-security"} {...others} />);
}

export default Component;
