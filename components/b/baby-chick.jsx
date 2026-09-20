import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-ztz1pyh.css';
import '../../css/s/sxglw9b6b.css';
import '../../css/m/m80ezb7tl.css';
import '../../css/r/r7gw539hv.css';
import '../../css/b/by5-9etod.css';
import '../../css/a/ab385x0fu.css';
import '../../css/h/hncl30yhu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y-ztz1pyh"/><path class="sxglw9b6b"/><path class="m80ezb7tl"/><circle class="r7gw539hv"/><circle class="by5-9etod"/><path class="ab385x0fu"/><path class="hncl30yhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:baby-chick"} {...others} />);
}

export default Component;
