import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upelnybhu.css';
import '../../css/g/g98mmptrb.css';
import '../../css/c/c59m8zuqm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 upelnybhu"/><path class="clr-i-outline clr-i-outline-path-2 g98mmptrb"/><path class="c59m8zuqm clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:image-line"} {...others} />);
}

export default Component;
