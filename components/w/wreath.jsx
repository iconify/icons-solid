import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2ywqub6x.css';
import '../../css/q/qs0kxmvmt.css';
import '../../css/v/v-787n_1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j2ywqub6x"/><path class="qs0kxmvmt"/><path class="v-787n_1k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wreath"} {...others} />);
}

export default Component;
