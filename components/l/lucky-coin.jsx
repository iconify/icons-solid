import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xobwcqbcb.css';
import '../../css/f/frdq-ccgi.css';
import '../../css/k/kxbb47bfy.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/r/ri50fzlsi.css';
import '../../css/y/yzxijebpv.css';
import '../../css/x/xzj1sdbeu.css';
import '../../css/z/z9g41w70f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xobwcqbcb"/><path class="frdq-ccgi wm-k"/><path class="kxbb47bfy wm-k"/><path class="rjg00-qxz wm-shine"/><path class="ri50fzlsi wm-k"/><path class="wm-k yzxijebpv"/><path class="wm-k xzj1sdbeu"/><path class="wm-a z9g41w70f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:lucky-coin"} {...others} />);
}

export default Component;
