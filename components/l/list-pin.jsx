import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgrtmnhmi.css';
import '../../css/x/x2xkjsa7t.css';
import '../../css/d/dw-bckwxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgrtmnhmi"/><path class="x2xkjsa7t"/><path class="dw-bckwxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-pin"} {...others} />);
}

export default Component;
