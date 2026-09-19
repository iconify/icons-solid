import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvr28lbwy.css';
import '../../css/o/o_uqry8um.css';
import '../../css/n/ncwwddbmt.css';
import '../../css/i/i0zpm4b2k.css';
import '../../css/m/mynjmzs7q.css';
import '../../css/s/s74sd3b4k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yvr28lbwy"/><path class="o_uqry8um"/><path class="ncwwddbmt"/><path class="i0zpm4b2k"/><path class="mynjmzs7q"/><path class="s74sd3b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lion"} {...others} />);
}

export default Component;
