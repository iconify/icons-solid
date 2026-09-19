import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dutifxv4y.css';
import '../../css/c/ceh6b9jzb.css';
import '../../css/n/ngoo26b5w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 dutifxv4y"/><path class="ceh6b9jzb clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 ngoo26b5w"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:info-line"} {...others} />);
}

export default Component;
