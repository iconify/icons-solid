import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lr2qexbim.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/y/y021bzbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lr2qexbim"/><path class="v7jzlzbxs wm-a"/><path class="y021bzbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-round-duo"} {...others} />);
}

export default Component;
