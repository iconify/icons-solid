import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm51gobgi.css';
import '../../css/t/tz-ovhbji.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="tm51gobgi"/><circle class="tz-ovhbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:question-mark-fill-12"} {...others} />);
}

export default Component;
