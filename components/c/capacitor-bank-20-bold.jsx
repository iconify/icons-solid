import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgmu06bbp.css';
import '../../css/r/ra6o1cbal.css';
import '../../css/s/scdgyhbpa.css';
import '../../css/z/zrom-o15u.css';
import '../../css/s/s66s7gbpy.css';
import '../../css/c/c5vmlnbmm.css';
import '../../css/n/nalvpbqes.css';
import '../../css/g/gaxbs_b_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qgmu06bbp"/><path class="ra6o1cbal"/><path class="scdgyhbpa"/><path class="zrom-o15u"/><path class="s66s7gbpy"/><path class="c5vmlnbmm"/><path class="nalvpbqes"/><path class="gaxbs_b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacitor-bank-20-bold"} {...others} />);
}

export default Component;
