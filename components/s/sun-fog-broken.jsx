import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/c/cz_7jaczd.css';
import '../../css/l/l6md27rub.css';
import '../../css/i/imyk_5tkk.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/p/pkibk1t_y.css';
import '../../css/n/n_csmurbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lt7j86jjt"/><path class="cz_7jaczd"/><path class="l6md27rub"/><path class="imyk_5tkk"/><path class="lq7a-_8su"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="pkibk1t_y"/><path class="n_csmurbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-fog-broken"} {...others} />);
}

export default Component;
