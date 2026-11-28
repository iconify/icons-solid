import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smzpc2bye.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ylhff9aue.css';
import '../../css/b/bp7gyqpkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary smzpc2bye"/><g class="dt0cm9dhy primary"><circle class="ylhff9aue"/><path class="bp7gyqpkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sun-duo"} {...others} />);
}

export default Component;
