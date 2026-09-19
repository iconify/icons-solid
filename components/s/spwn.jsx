import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrnd56o7y.css';
import '../../css/m/mxeyk-kuw.css';
import '../../css/l/lm1vs3fnp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="jrnd56o7y"/><path class="mxeyk-kuw"/><path class="lm1vs3fnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:spwn"} {...others} />);
}

export default Component;
