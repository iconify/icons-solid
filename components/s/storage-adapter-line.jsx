import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxe9zxbyg.css';
import '../../css/y/y5gn7kv-p.css';
import '../../css/l/l3tsckuqw.css';
import '../../css/o/oo0-igigj.css';
import '../../css/g/gt75egmgq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 dxe9zxbyg"/><path class="clr-i-outline clr-i-outline-path-2 y5gn7kv-p"/><path class="clr-i-outline clr-i-outline-path-3 l3tsckuqw"/><path class="clr-i-outline clr-i-outline-path-4 oo0-igigj"/><path class="clr-i-outline clr-i-outline-path-5 gt75egmgq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:storage-adapter-line"} {...others} />);
}

export default Component;
