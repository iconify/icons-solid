import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qa27x5b5v.css';
import '../../css/l/lfl8g1bjv.css';
import '../../css/x/xpmt8p_bt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="qa27x5b5v"/><rect class="lfl8g1bjv"/><rect class="xpmt8p_bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layout-template"} {...others} />);
}

export default Component;
