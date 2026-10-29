import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4g8ogbkb.css';
import '../../css/j/jb48jbc1y.css';
import '../../css/b/bhssvzbrt.css';
import '../../css/u/uld-4qgrf.css';
import '../../css/n/nbv0i_meh.css';
import '../../css/p/p_ktdkkbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4g8ogbkb wm-k"/><path class="jb48jbc1y wm-k"/><path class="bhssvzbrt wm-k"/><path class="uld-4qgrf wm-a"/><path class="nbv0i_meh wm-a"/><path class="p_ktdkkbn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:link-2"} {...others} />);
}

export default Component;
