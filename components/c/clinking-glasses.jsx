import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhfs15bud.css';
import '../../css/m/mbmql2bzm.css';
import '../../css/r/r9rxje2yi.css';
import '../../css/m/mn-s01b9h.css';
import '../../css/v/vhoyfbciv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qhfs15bud"/><path class="mbmql2bzm"/><path class="r9rxje2yi"/><path class="mn-s01b9h"/><path class="vhoyfbciv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clinking-glasses"} {...others} />);
}

export default Component;
