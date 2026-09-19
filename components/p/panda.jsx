import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bo6vubllt.css';
import '../../css/t/tpvsr3cen.css';
import '../../css/u/uls873tdy.css';
import '../../css/c/cnpmbwbgj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bo6vubllt"/><path class="tpvsr3cen"/><path class="uls873tdy"/><path class="cnpmbwbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:panda"} {...others} />);
}

export default Component;
