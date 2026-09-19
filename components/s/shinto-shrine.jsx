import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co2vxcczv.css';
import '../../css/x/xv14olbqm.css';
import '../../css/l/l1hhfn04f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="co2vxcczv"/><path class="xv14olbqm"/><path class="l1hhfn04f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shinto-shrine"} {...others} />);
}

export default Component;
