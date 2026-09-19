import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/r/rplob1ewi.css';
import '../../css/a/a0910tb-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="rplob1ewi"/><path class="a0910tb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pm-1x1"} {...others} />);
}

export default Component;
