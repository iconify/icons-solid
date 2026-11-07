import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny2z_jjno.css';
import '../../css/m/m33dd1b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny2z_jjno"/><path class="m33dd1b0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-notes-bold"} {...others} />);
}

export default Component;
