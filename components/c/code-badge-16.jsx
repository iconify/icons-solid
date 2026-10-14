import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv2r58bup.css';
import '../../css/k/k0khjcc8h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lv2r58bup"/><path class="k0khjcc8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:code-badge-16"} {...others} />);
}

export default Component;
