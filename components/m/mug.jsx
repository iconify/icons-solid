import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/delqnrbzm.css';
import '../../css/j/j_fa22bmn.css';
import '../../css/m/mbzmyys3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="delqnrbzm"/><path class="j_fa22bmn"/><path class="mbzmyys3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mug"} {...others} />);
}

export default Component;
