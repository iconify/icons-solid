import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6lpuzb1n.css';
import '../../css/p/pkogtxbhl.css';
import '../../css/o/o0054bc1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6lpuzb1n"/><path clip-rule="evenodd" class="pkogtxbhl"/><path class="o0054bc1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mork"} {...others} />);
}

export default Component;
