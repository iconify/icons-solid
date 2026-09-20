import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz32weafm.css';
import '../../css/t/tawx_qbnz.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="iz32weafm"/><path class="tawx_qbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:circle-minus"} {...others} />);
}

export default Component;
