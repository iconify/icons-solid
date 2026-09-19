import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej7zoc6ew.css';
import '../../css/l/lsyh92b0g.css';
import '../../css/k/kn7i6-6po.css';
import '../../css/r/rdosgs2oe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ej7zoc6ew"/><path class="lsyh92b0g"/><path class="kn7i6-6po"/><path class="rdosgs2oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:firstquartermoon"} {...others} />);
}

export default Component;
