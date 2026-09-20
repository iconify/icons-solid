import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts5yxozgn.css';
import '../../css/h/hk7v3ko0m.css';
import '../../css/f/frayrbmqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ts5yxozgn"/><path class="hk7v3ko0m"/><path class="frayrbmqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:link-broken-1"} {...others} />);
}

export default Component;
