import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/txnx89bcx.css';
import '../../css/u/u2eyoogus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="txnx89bcx"/><path class="u2eyoogus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-done-02"} {...others} />);
}

export default Component;
