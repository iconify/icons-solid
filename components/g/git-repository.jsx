import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8idb4bxx.css';
import '../../css/y/yyxm9kxcg.css';
import '../../css/u/ul3j-ojyj.css';
import '../../css/j/jzgvrpb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d8idb4bxx"/><path class="yyxm9kxcg"/><path class="ul3j-ojyj"/><path class="jzgvrpb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-repository"} {...others} />);
}

export default Component;
