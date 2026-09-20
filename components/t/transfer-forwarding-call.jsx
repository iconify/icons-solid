import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xeqzz1bzj.css';
import '../../css/t/t6b_amblm.css';
import '../../css/h/hpochq_xa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="xeqzz1bzj"/><path class="t6b_amblm"/><path class="hpochq_xa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:transfer-forwarding-call"} {...others} />);
}

export default Component;
