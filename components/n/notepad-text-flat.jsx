import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8y9mcbqf.css';
import '../../css/q/q1dm4ebyz.css';
import '../../css/w/w5gsaiq2j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8y9mcbqf"/><path clip-rule="evenodd" class="q1dm4ebyz"/><path class="w5gsaiq2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:notepad-text-flat"} {...others} />);
}

export default Component;
