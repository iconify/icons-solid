import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1_o48b8v.css';
import '../../css/w/w2o_n1p2a.css';
import '../../css/i/i-41ktb_b.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t1_o48b8v"/><path class="w2o_n1p2a"/><path clip-rule="evenodd" class="i-41ktb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:paste-16"} {...others} />);
}

export default Component;
