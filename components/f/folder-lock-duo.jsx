import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj4oddbyl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/c/c-wko1bca.css';
import '../../css/g/gc26t7bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj4oddbyl secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="c-wko1bca"/><path class="gc26t7bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-lock-duo"} {...others} />);
}

export default Component;
