import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o98piib2v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z-ixbzbzz.css';
import '../../css/u/u-c-k03su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o98piib2v secondary"/><g class="dt0cm9dhy primary"><path class="z-ixbzbzz"/><path class="u-c-k03su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-star-duo"} {...others} />);
}

export default Component;
