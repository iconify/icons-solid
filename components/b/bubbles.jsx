import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ecyiiytap.css';
import '../../css/q/qclwmq-1x.css';
import '../../css/b/bax3frbml.css';
import '../../css/d/dya2tw6rb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ecyiiytap"/><circle class="qclwmq-1x"/><circle class="bax3frbml"/><path class="dya2tw6rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubbles"} {...others} />);
}

export default Component;
