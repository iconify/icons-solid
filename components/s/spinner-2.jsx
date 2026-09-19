import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg1qmh3wi.css';
import '../../css/m/mdy1o1bwu.css';
import '../../css/z/zpzhmdbvo.css';
import '../../css/f/fn9tp_bpd.css';
import '../../css/d/dv43diewr.css';
import '../../css/g/g1fcqkbiq.css';
import '../../css/r/rs8d3etnn.css';
import '../../css/f/fxbq7mboi.css';
import '../../css/g/g2y6lgbbd.css';
import '../../css/f/fd3d41bdv.css';
import '../../css/u/ux5-f31vc.css';
import '../../css/d/do0vzmvqf.css';

const viewBox = {"width":50,"height":50};
const content = `<circle class="dg1qmh3wi"/><circle class="mdy1o1bwu"/><circle class="zpzhmdbvo"/><circle class="fn9tp_bpd"/><circle class="dv43diewr"/><circle class="g1fcqkbiq"/><circle class="rs8d3etnn"/><circle class="fxbq7mboi"/><circle class="g2y6lgbbd"/><circle class="fd3d41bdv"/><circle class="ux5-f31vc"/><circle class="do0vzmvqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:spinner-2"} {...others} />);
}

export default Component;
