import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-puob4kf.css';
import '../../css/b/bc6h-x4ko.css';
import '../../css/j/j_023ccyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z-puob4kf"/><circle transform="rotate(90 12 12)" class="bc6h-x4ko"/><path class="j_023ccyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:key-lock"} {...others} />);
}

export default Component;
