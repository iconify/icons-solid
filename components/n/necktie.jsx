import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajosvfg_r.css';
import '../../css/j/jkp0e3b_t.css';
import '../../css/g/gm8nafrka.css';
import '../../css/t/tu1r6vbbz.css';
import '../../css/z/zu4mj3bxg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ajosvfg_r"/><path class="jkp0e3b_t"/><path class="gm8nafrka"/><path class="tu1r6vbbz"/><path class="zu4mj3bxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:necktie"} {...others} />);
}

export default Component;
