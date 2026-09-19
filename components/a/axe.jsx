import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8ccp12wz.css';
import '../../css/n/nzx_vzkit.css';
import '../../css/e/e-u7_pwmo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h8ccp12wz"/><path class="nzx_vzkit"/><path class="e-u7_pwmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:axe"} {...others} />);
}

export default Component;
