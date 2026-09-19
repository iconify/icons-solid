import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avwrpqfiu.css';
import '../../css/d/dw535lrsr.css';
import '../../css/b/btgs09vbq.css';
import '../../css/p/p1mqhfd7d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="avwrpqfiu"/><path class="dw535lrsr"/><path class="btgs09vbq"/><path class="p1mqhfd7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pixi-lock"} {...others} />);
}

export default Component;
