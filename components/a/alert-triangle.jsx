import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfn4-fbpg.css';
import '../../css/b/b5qymdbqk.css';
import '../../css/y/y6f63p5dy.css';
import '../../css/s/s9zmfboay.css';
import '../../css/z/zprdkcbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sfn4-fbpg wm-k"/><path class="b5qymdbqk wm-deco"/><path class="wm-k y6f63p5dy"/><path class="s9zmfboay wm-k"/><path class="wm-shadow zprdkcbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:alert-triangle"} {...others} />);
}

export default Component;
