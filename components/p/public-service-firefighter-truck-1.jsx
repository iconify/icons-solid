import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj_i4sb1g.css';
import '../../css/n/nn8s1ccie.css';
import '../../css/e/e_64-dfkx.css';
import '../../css/p/pbbgod-ky.css';
import '../../css/u/ulopsgbws.css';
import '../../css/m/m82m61bhu.css';
import '../../css/g/g8dsh_ber.css';
import '../../css/s/sk21kidbo.css';
import '../../css/p/pwic3g10p.css';
import '../../css/k/ky7eqyq0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lj_i4sb1g"/><path class="nn8s1ccie"/><path class="e_64-dfkx"/><path class="pbbgod-ky"/><path class="ulopsgbws"/><path class="m82m61bhu"/><path class="g8dsh_ber"/><path class="sk21kidbo"/><path class="pwic3g10p"/><path class="ky7eqyq0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:public-service-firefighter-truck-1"} {...others} />);
}

export default Component;
