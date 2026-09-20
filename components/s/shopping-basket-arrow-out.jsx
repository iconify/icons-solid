import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zn702dp6u.css';
import '../../css/v/vbmlwcqvh.css';
import '../../css/u/uc87z9emd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zn702dp6u"/><path class="vbmlwcqvh"/><path class="uc87z9emd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-basket-arrow-out"} {...others} />);
}

export default Component;
