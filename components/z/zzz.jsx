import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2dwgg_xu.css';
import '../../css/y/yo-f7l1pt.css';
import '../../css/z/zvtktlzvi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2dwgg_xu"/><path class="yo-f7l1pt"/><path class="zvtktlzvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:zzz"} {...others} />);
}

export default Component;
