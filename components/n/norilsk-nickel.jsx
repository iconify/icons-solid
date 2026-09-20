import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggqsrbsm.css';
import '../../css/e/en2ep-wvj.css';
import '../../css/p/pl036ib_f.css';

const viewBox = {"width":1043,"height":508};
const content = `<path class="rggqsrbsm"/><path class="en2ep-wvj"/><path class="pl036ib_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:norilsk-nickel"} {...others} />);
}

export default Component;
