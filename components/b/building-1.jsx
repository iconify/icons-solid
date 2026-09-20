import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2jk59bkf.css';
import '../../css/n/nshdljy6n.css';
import '../../css/y/yt38dpl0f.css';
import '../../css/i/i9-xrkbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f2jk59bkf"/><path class="nshdljy6n"/><path class="yt38dpl0f"/><path class="i9-xrkbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-1"} {...others} />);
}

export default Component;
