import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emus6-b1j.css';
import '../../css/q/qrb2onfcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="emus6-b1j"/><path class="qrb2onfcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:party-popper-filled"} {...others} />);
}

export default Component;
