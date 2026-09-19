import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbu_e79xt.css';
import '../../css/m/m8bh_vb-g.css';
import '../../css/o/oul2otxis.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kbu_e79xt"/><path class="m8bh_vb-g"/><path class="oul2otxis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oncoming-fist-medium"} {...others} />);
}

export default Component;
