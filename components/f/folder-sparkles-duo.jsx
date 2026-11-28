import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkvjifb5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qr35jpbwi.css';
import '../../css/l/ls_6yn0ed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkvjifb5p secondary"/><g class="dt0cm9dhy primary"><path class="qr35jpbwi"/><path class="ls_6yn0ed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-sparkles-duo"} {...others} />);
}

export default Component;
