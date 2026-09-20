import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g58yorbkc.css';
import '../../css/m/mvgayujde.css';
import '../../css/m/mdlzjj5jz.css';

const viewBox = {"width":485,"height":120};
const content = `<g class="ft5dv1b6b"><path class="g58yorbkc"/><path class="mvgayujde"/><path class="mdlzjj5jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:algolia"} {...others} />);
}

export default Component;
