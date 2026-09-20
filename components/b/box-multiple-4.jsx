import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zbs_fwc2n.css';
import '../../css/k/kp-sg-udx.css';
import '../../css/r/r49fxzblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zbs_fwc2n"/><path class="kp-sg-udx"/><path class="r49fxzblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-multiple-4"} {...others} />);
}

export default Component;
