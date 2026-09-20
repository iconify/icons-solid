import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmgqnccqy.css';
import '../../css/p/pnlwn_bgq.css';
import '../../css/e/e_h1d4ywv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmgqnccqy"/><path class="pnlwn_bgq"/><path class="e_h1d4ywv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ist"} {...others} />);
}

export default Component;
