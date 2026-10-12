import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-_r7fzby.css';
import '../../css/u/uo3w-_qqw.css';
import '../../css/a/a68jy1ppt.css';
import '../../css/v/vm305za0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-_r7fzby"/><path class="uo3w-_qqw"/><path class="a68jy1ppt"/><path class="vm305za0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-cube"} {...others} />);
}

export default Component;
