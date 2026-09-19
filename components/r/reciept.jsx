import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hwp1piboi.css';
import '../../css/l/l8k5l9bki.css';
import '../../css/w/wrms15b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="hwp1piboi"/><path class="l8k5l9bki"/><path class="wrms15b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:reciept"} {...others} />);
}

export default Component;
