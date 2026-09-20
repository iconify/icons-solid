import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knsscbb2e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lwntsjhjn.css';
import '../../css/f/ft22hdhmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knsscbb2e"/><g class="xtpeb-edw"><path class="lwntsjhjn"/><path class="ft22hdhmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-at-duotone"} {...others} />);
}

export default Component;
