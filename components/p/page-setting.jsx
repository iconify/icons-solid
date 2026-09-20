import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zse101bvh.css';
import '../../css/u/uzn8edcpa.css';
import '../../css/t/twgjracvu.css';
import '../../css/t/tjx3ewbek.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zse101bvh"/><path class="uzn8edcpa"/><path class="twgjracvu"/><path class="tjx3ewbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:page-setting"} {...others} />);
}

export default Component;
