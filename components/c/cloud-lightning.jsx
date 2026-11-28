import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/txf_xf5pi.css';
import '../../css/m/myy3teiet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="txf_xf5pi"/><path class="myy3teiet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-lightning"} {...others} />);
}

export default Component;
