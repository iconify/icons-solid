import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l14n7kb1k.css';
import '../../css/h/hj5pjd6bf.css';
import '../../css/d/d4uf2sbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l14n7kb1k"/><path class="hj5pjd6bf wm-a"/><path class="d4uf2sbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:network-duo"} {...others} />);
}

export default Component;
