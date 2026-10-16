import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmz-t6bds.css';
import '../../css/c/cns4skbwo.css';
import '../../css/y/yk3u9fp8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lmz-t6bds"/><path class="cns4skbwo"/><path class="yk3u9fp8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-sparkle"} {...others} />);
}

export default Component;
