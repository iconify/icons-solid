import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mukfgmbez.css';
import '../../css/y/ynttdhfug.css';
import '../../css/p/p9bu9v51v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mukfgmbez"/><path class="ynttdhfug"/><path class="p9bu9v51v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mx"} {...others} />);
}

export default Component;
