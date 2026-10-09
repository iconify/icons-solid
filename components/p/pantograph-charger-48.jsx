import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9280qeki.css';
import '../../css/h/hnuq-sbxl.css';
import '../../css/o/ogjcl74fm.css';
import '../../css/r/rz4_8qb5z.css';
import '../../css/g/gxp3w8zpx.css';
import '../../css/r/rizqixbvk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h9280qeki"/><path class="hnuq-sbxl"/><path class="ogjcl74fm"/><path class="rz4_8qb5z"/><path class="gxp3w8zpx"/><path class="rizqixbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pantograph-charger-48"} {...others} />);
}

export default Component;
