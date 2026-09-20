import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sovpxqy4m.css';
import '../../css/m/m9dxpvbzj.css';
import '../../css/c/cyi373zjp.css';
import '../../css/f/facsxjpvx.css';
import '../../css/g/gf_k14iap.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sovpxqy4m"/><path class="m9dxpvbzj"/><path class="cyi373zjp"/><path class="facsxjpvx"/><path class="gf_k14iap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blood-bag-donation"} {...others} />);
}

export default Component;
