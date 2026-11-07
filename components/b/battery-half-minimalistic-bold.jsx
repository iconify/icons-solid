import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge4dfdclf.css';
import '../../css/q/qfc_s602x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ge4dfdclf"/><path class="qfc_s602x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-minimalistic-bold"} {...others} />);
}

export default Component;
