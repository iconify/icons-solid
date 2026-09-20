import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xflqgqbet.css';
import '../../css/q/qtgs8telk.css';
import '../../css/i/idia1tbxe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xflqgqbet"/><path class="qtgs8telk"/><path class="idia1tbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:poultry-leg"} {...others} />);
}

export default Component;
