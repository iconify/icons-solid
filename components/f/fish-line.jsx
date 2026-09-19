import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ards4o__f.css';
import '../../css/t/t0jstuirm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="ards4o__f clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 t0jstuirm"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:fish-line"} {...others} />);
}

export default Component;
