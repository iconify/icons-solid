import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/c/crd953qrq.css';
import '../../css/v/v3c3ciota.css';
import '../../css/a/an4w8gbhl.css';
import '../../css/t/t9jwpibcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="crd953qrq"/><path class="v3c3ciota"/><circle class="an4w8gbhl"/><path class="t9jwpibcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:newspaper"} {...others} />);
}

export default Component;
