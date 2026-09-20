import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/ojx5c4b_g.css';
import '../../css/a/axntg8bsa.css';
import '../../css/n/nlxgqqb_u.css';
import '../../css/m/mfda2d1xn.css';
import '../../css/k/kspr8xc2r.css';
import '../../css/c/cb15f1bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ojx5c4b_g"/><path class="axntg8bsa"/><path class="nlxgqqb_u"/><path class="mfda2d1xn"/><path class="kspr8xc2r"/><path class="cb15f1bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:laptop-camera"} {...others} />);
}

export default Component;
