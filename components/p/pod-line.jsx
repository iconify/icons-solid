import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju1abjbdv.css';
import '../../css/k/k9iop_blz.css';
import '../../css/f/ferv5fbqf.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ju1abjbdv"/><path class="clr-i-outline clr-i-outline-path-2 k9iop_blz"/><path class="clr-i-outline clr-i-outline-path-3 ferv5fbqf"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:pod-line"} {...others} />);
}

export default Component;
