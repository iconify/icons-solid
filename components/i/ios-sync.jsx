import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/naq0tfbis.css';
import '../../css/p/pkado8zjo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="naq0tfbis"/><path class="pkado8zjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-sync"} {...others} />);
}

export default Component;
