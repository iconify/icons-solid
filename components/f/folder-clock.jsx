import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-ixbzbzz.css';
import '../../css/h/hvapmib7z.css';
import '../../css/c/c2bllziij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z-ixbzbzz"/><path class="hvapmib7z"/><path class="c2bllziij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-clock"} {...others} />);
}

export default Component;
