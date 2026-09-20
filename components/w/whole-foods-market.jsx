import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw_bnfbfv.css';
import '../../css/q/q5r6g9iuq.css';

const viewBox = {"width":1000,"height":684.206};
const content = `<path class="qw_bnfbfv"/><path class="q5r6g9iuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:whole-foods-market"} {...others} />);
}

export default Component;
