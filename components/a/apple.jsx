import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-6326bns.css';
import '../../css/h/h2clnuigs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s-6326bns"/><path class="h2clnuigs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:apple"} {...others} />);
}

export default Component;
