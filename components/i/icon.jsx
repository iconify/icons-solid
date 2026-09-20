import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by6jb6bwn.css';
import '../../css/n/nirpuvbma.css';
import '../../css/y/yrpd6abvk.css';
import '../../css/u/u-q9eirrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="by6jb6bwn"/><path class="nirpuvbma"/><path class="yrpd6abvk"/><path class="u-q9eirrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:icon"} {...others} />);
}

export default Component;
