import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd13eg0ma.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pd13eg0ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-horizontal-center-two"} {...others} />);
}

export default Component;
