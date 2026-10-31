import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2aby4rup.css';
import '../../css/x/xr-25sblh.css';
import '../../css/x/xj66vdbdj.css';
import '../../css/k/k22zbosmg.css';
import '../../css/m/mkeo3ob9w.css';
import '../../css/c/czb0zab1v.css';
import '../../css/e/eijlxkbud.css';
import '../../css/y/yr7mvbbcl.css';
import '../../css/m/mu5lhqsyv.css';
import '../../css/a/atsu9rb_e.css';
import '../../css/o/of5e2ytgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n2aby4rup wm-shadow"/><path class="xr-25sblh"/><path class="xj66vdbdj"/><path class="k22zbosmg"/><path class="mkeo3ob9w"/><path class="czb0zab1v"/><path class="eijlxkbud"/><path class="yr7mvbbcl"/><path class="mu5lhqsyv"/><path class="atsu9rb_e wm-shine"/><path class="of5e2ytgz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:arrow-big-up"} {...others} />);
}

export default Component;
