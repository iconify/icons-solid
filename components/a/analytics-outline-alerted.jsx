import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmk6nb6wm.css';
import '../../css/c/c2d_b_8ww.css';
import '../../css/e/egbtnbclf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bmk6nb6wm clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="c2d_b_8ww clr-i-outline--alerted clr-i-outline-path-2--alerted"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-3--alerted egbtnbclf"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:analytics-outline-alerted"} {...others} />);
}

export default Component;
