import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cptoxtiyw.css';
import '../../css/b/baydd4_ff.css';
import '../../css/l/lj3osmbyl.css';
import '../../css/v/v4_f2cbms.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cptoxtiyw"/><path class="baydd4_ff"/><path class="lj3osmbyl"/><path class="v4_f2cbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:police-car-light"} {...others} />);
}

export default Component;
