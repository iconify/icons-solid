import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1uu0n5gk.css';
import '../../css/y/yxcd2-bjp.css';
import '../../css/u/uhzeogauj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g1uu0n5gk"/><path class="yxcd2-bjp"/><path class="uhzeogauj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:folder-tree"} {...others} />);
}

export default Component;
