import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t53hhvbfe.css';
import '../../css/p/px56njbgv.css';
import '../../css/p/py47g3b8c.css';
import '../../css/q/q7tzswzhy.css';
import '../../css/z/z9u3-5bac.css';
import '../../css/r/raiwtsbgh.css';
import '../../css/e/e4suaiebo.css';
import '../../css/z/zvrvw_x7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t53hhvbfe wm-k"/><path class="px56njbgv wm-k"/><path class="py47g3b8c wm-k"/><path class="q7tzswzhy wm-shine"/><path class="wm-a z9u3-5bac"/><path class="raiwtsbgh wm-a"/><path class="e4suaiebo wm-a"/><path class="wm-shine zvrvw_x7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:thumbs-down"} {...others} />);
}

export default Component;
