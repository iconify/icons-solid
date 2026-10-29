import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ljl4ldb7v.css';
import '../../css/l/l0e-lqbeo.css';
import '../../css/b/bry1z00iu.css';
import '../../css/a/a26dkbbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ljl4ldb7v wm-deco"/><path class="l0e-lqbeo wm-k"/><path class="bry1z00iu wm-a"/><path class="a26dkbbht wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-ordered-blueprint"} {...others} />);
}

export default Component;
