import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f7g7vtbvj.css';
import '../../css/p/p21puft2v.css';
import '../../css/e/ehkk3-jzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f7g7vtbvj"/><path class="p21puft2v"/><path class="ehkk3-jzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ghost"} {...others} />);
}

export default Component;
