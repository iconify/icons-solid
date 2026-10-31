import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7p2enbbo.css';
import '../../css/v/v1a49acba.css';
import '../../css/t/tkrg51qty.css';
import '../../css/e/ewv-anbkb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="k7p2enbbo"/><path class="v1a49acba"/><path class="tkrg51qty"/><path class="ewv-anbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:aruba"} {...others} />);
}

export default Component;
