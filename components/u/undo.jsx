import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs2vkabri.css';
import '../../css/f/f74ea-8ng.css';
import '../../css/z/zqr5bgb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gs2vkabri"/><path class="f74ea-8ng"/><path class="zqr5bgb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:undo"} {...others} />);
}

export default Component;
