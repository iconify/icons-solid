import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ude9i169c.css';
import '../../css/n/n1hfnlbgv.css';
import '../../css/a/azrmtruiz.css';
import '../../css/o/ots7eo6hs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ude9i169c"/><path class="n1hfnlbgv"/><g><path class="azrmtruiz"/><path class="ots7eo6hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-toggle-outline"} {...others} />);
}

export default Component;
